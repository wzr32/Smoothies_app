<template>
  <div>  

    <span class="go_back">
      <router-link to="/">
        <i class="fas fa-angle-left"></i> 
      </router-link>
    </span>
    
    <div class="row">
      <div class="col-6 mx-auto my-2" v-for="(smoothie, index) in smoothies" :key="index">
        <Card 
          :id="smoothie._id"
          :name="smoothie.name"
          :likes="smoothie.likes"
          :taste="smoothie.taste"
          :fruits="smoothie.fruits"
          :liquid="smoothie.liquid"
          :protein="smoothie.protein"
        />
      </div>
    </div>
  
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import axios from 'axios'

export default {
  name: 'List',
  components: { 
    Card 
  },
  data: () => ({
    smoothies: []
  }),
  methods: {
    async getData(){
      let { data } = await axios.get('http://127.0.0.1:4000/api/smoothies')
      this.smoothies = data
    }
  },
  created() {
    this.getData();
  },

}
</script>