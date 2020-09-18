<template>
  <div>
    <router-link to="/create">
      <button type="button" class="btn btn-green">Create your own smoothie</button>
    </router-link>
    <router-link to="/list">
      <button type="button" class="btn btn-blue">Take me to the smoothies!</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data: () => ({}),
};
</script>

<style>
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
  border: 2px solid rgb(14, 80, 111);
  position: relative;
  transition: .3s ease all;
}
.btn-blue:hover{
  background: #0b9bdd;
}
.btn-green {
  border: 2px solid rgb(23, 237, 144);
  transition: .3s ease all;
}
.btn-green:hover{
  background: #0bc493;
}
a, a:hover {
  text-decoration: none;
}
</style>