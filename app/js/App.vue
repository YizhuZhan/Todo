<template>
    <div id="app">
      <div id="cover"></div>
      <my-header></my-header>
      <Todo></Todo>
      <my-footer></my-footer>
    </div>
</template>

<script>
import Header from "../Components/Header.vue"
import Todo from "../Components/Todo.vue"
import Footer from "../Components/Footer.vue"

export default {
  components: {
    "my-header": Header,
    Todo,
    "my-footer": Footer
  }
}
</script>

<style scoped>
#app {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>
