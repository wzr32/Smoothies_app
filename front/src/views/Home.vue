<template>
  <div class="home">
    <div>
      <p>Smoothies Match was designed by smoothies specialist to find the perfect flavor to match your mood and ...</p>
    </div>
    <Menu />
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  name: "Home",
  components: {
    Menu,
  },
};
</script>
