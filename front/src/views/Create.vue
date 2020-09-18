<template>
  <div class="about">
    <span class="go_back">
      <router-link to="/">
        <i class="fas fa-angle-left"></i>
      </router-link>
    </span>

    <Form />
  </div>
</template>

<script>
import Form from '@/components/Form'

export default {
  name: "Create",
  components: {
    Form
  },
  data: () => ({}),
};
</script>
