<template>
  <div>
    <form @submit.prevent="saveSmoothie(smoothie)">

      <div class="form-group">
        <label for="name">Smoothie name:</label>
        <input type="text" id="name" name="name" class="form-control" v-model="smoothie.name"/>
      </div>

      <div class="form-group">
        <label for="fruits">Fruits:</label>
        <div class="d-flex justify-content-between">
          <select name="fruits" id="fruits" class="form-control w-50" v-model="fruit">
            <option value="" selected disabled>Select...</option>
            <option value="watermelon">Watermelon</option>
            <option value="strawberry">Strawberry</option>
            <option value="pineapple">Pineapple</option>
            <option value="orange">Orange</option>
            <option value="kiwi">Kiwi</option>
            <option value="banana">Banana</option>
            <option value="lime">Lime</option>
          </select> 
          <i class="fas fa-plus plus-btn w-50" @click="saveFruit()"></i>

        </div>

        <div class="d-inline" v-for="(fruit, index) in smoothie.fruits" :key="index">
          <div class="fruits">
            <img :src="require('@/assets/icons/' + fruit.name + '.png')" :alt="fruit.name" class="ingredients d-inline">
            <i class="far fa-times-circle delete-icon" @click="removeFruit(index)"></i>
          </div>
        </div>
      
      </div>


      <div class="form-group">
        <label for="liquid">Liquid:</label>
        <select name="liquid" id="liquid" class="form-control" v-model="smoothie.liquid">
          <option value="" selected disabled>Select...</option>
          <option value="milk">Milk</option>
          <option value="water">Water</option>
          <option value="coconut_water">Coconut Water</option>
          <option value="soy_milk">Soy Milk</option>
          <option value="almond_milk">Almond Milk</option>
        </select>
      </div>


      <div class="form-group">
        <label for="protein">Protein:</label>
        <select name="protein" id="protein" class="form-control" v-model="smoothie.protein">
          <option value="" selected disabled>Select...</option>
          <option value="vainilla">Vainilla</option>
          <option value="chocolate">Chocolate</option>
          <option value="coconut">Coconut</option>
          <option value="caramel">Caramel</option>
          <option value="no_flavor">No Flavor</option>

        </select>
      </div>

      <div class="form-group">
        <label for="taste">Taste:</label>
        <div class="d-flex">
          <input 
            type="number" 
            min="0" 
            max="100" 
            id="taste" 
            name="taste" 
            class="form-control w-25"
            v-model="smoothie.taste"
          />
          <img src="@/assets/icons/flame.png" alt="flame" class="flame">
        </div>
      </div>

      <button typep="submit" class="btn btn-blue">Save it!</button>

    </form>
  </div>
</template>

<script>
import toastr from 'toastr'
import axios from 'axios'

export default {
  name: "Form",
  data(){
    return {
      smoothie :{
        name: "",
        fruits: [],
        liquid: "",
        protein: "",
        taste: 0,
      },
      fruit: "",
    }
  },
  methods: {
    saveFruit() {
      if(this.fruit.trim() === '') return;
      let newFruit = {name: this.fruit}
      this.smoothie.fruits.push(newFruit);
      this.fruit = "";
    },
    saveSmoothie(smoothie){
      if([this.smoothie.name.trim(),
        this.smoothie.liquid.trim(),
        this.smoothie.protein.trim()].includes("")){
          toastr.warning("Can't be empty fields")
          return;
      }else if(this.smoothie.fuits === []){
        toastr.warning("You must choose a fruit")
        return;
      }
      this.createSmoothie(smoothie);
      toastr.success('Smoothie created!!')

      this.smoothie.fruits.splice(0, this.smoothie.fruits.length)
      this.smoothie.name = "";
      this.smoothie.fuits = [];
      this.smoothie.liquid = "";
      this.smoothie.protein = "";
      this.smoothie.taste = 0;
    },
    removeFruit(index) {
      this.smoothie.fruits.splice(index, 1)
    },
    async createSmoothie(smoothie){
      await axios.post('http://127.0.0.1:4000/api/smoothies', smoothie)
    }
  },
};
</script>

<style>
  label{
    width: 100%;
    font-weight: bold;
    text-align: start;
  }
  .btn {
    padding: 1em;
    display: block;
    width: 100%;
    border-radius: 50px;
    margin: 2em 0;
    transition: .3s ease all;
    color: #fff !important;
    font-weight: bold;
  }
  .btn:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
  .btn-blue {
    border: 2px solid rgb(3, 172, 250);
    position: relative;
    transition: .3s ease all;
  }
  .btn-blue:hover{
    background: #0b9bdd;
  }
  .plus-btn{
    color: rgb(38, 177, 31);
    font-size: 35px;
    transition: .3s ease all;
  }
  .plus-btn:hover::before {
    cursor: pointer;
  }
  .flame,
  .ingredients {
    width: 2.2em;
    height: 2.2em;
    margin: 0 1.3em;
  }
  .fruits{
    display: inline-block;
    position: relative;
    margin: .7em 0 0 0;
  }
  .fruits .delete-icon {
    position: absolute;
    left: 75%;
    color: rgb(167, 29, 29);
  }
  .fruits .delete-icon:hover {
    cursor: pointer;
  }

  input, select {
    border: none !important;
    border-radius: none !important;
    background: none !important;
    border-bottom: 1px solid #fff !important;
    outline: none !important;
    color: #fff !important;
  }

  option {
    color: #000 !important;
  }
  img {
    filter: drop-shadow(0px 0px 1px);
  }
</style>