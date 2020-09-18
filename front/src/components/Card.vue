<template>
  <div class="card">
    <img 
      src="@/assets/icons/smoothie.png" 
      class="card-img-top mx-auto p-4" 
      alt="smoothie">
      <div class="card-body">
        <h5>{{ name }}</h5>
        <div class="d-flex justify-content-around">
          <div>
            <img 
              src="@/assets/icons/like.png" 
              class="card-icons like-button" 
              alt="likes" 
              @click="like(id)"
            />
            <span>{{ smoothieLikes }}</span>
          </div>
          <div>
            <img src="@/assets/icons/flame.png" class="card-icons" alt="taste" />
            <span>{{ taste }}</span>
          </div>
        </div>
        <div class="card-text mt-4">
          <h6>Ingredients</h6>
          <div class="my-2">
            <img 
              :src="require('@/assets/icons/' + liquid + '.png')" 
              :alt="liquid" 
              class="card-icons"
            />
            <img 
              :src="require('@/assets/icons/' + protein + '.png')" 
              :alt="protein" 
              class="card-icons"
            />
          </div>
          <div>
            <img
              v-for="(fruit, index) in fruits" :key="index" 
              :src="require('@/assets/icons/' + fruit.name + '.png')" 
              :alt="protein" 
              class="card-icons"
            />
          </div>
        </div>

      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Card",
  data() {
    return{
      smoothieLikes: this.likes
    }
  },
  props: ['name', 'likes', 'fruits', 'taste', 'fruits', 'liquid', 'protein', 'id'],
  methods: {
    async like(id) {
      this.smoothieLikes ++
      let data = {"likes":this.smoothieLikes}
      await axios.put(`http://127.0.0.1:4000/api/smoothies/${id}`, data)
    }
  }
};
</script>

<style>
  .card {
    background: steelblue !important;
    border-radius: 10px;
    border: 1px solid #fff;
  }
  .card-icons{
    width: 1.5em;
    margin: 0 .4em
  }
  .like-button:hover {
    cursor: pointer;
  }
</style>