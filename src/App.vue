<template>
  <div id="app">
    <Nav></Nav>
    <TodoList></TodoList>
    <Footer></Footer>
  </div>
</template>

<script>

// Layouts
import Nav from '@/components/layouts/Nav.vue';
import Footer from '@/components/layouts/Footer.vue';

// Todos
import TodoList from '@/components/todos/TodoList.vue';

export default {
  name: 'App',
  components: {
    Nav,
    Footer,
    TodoList,
  },
};

</script>

<style lang="scss">

html {
  height: 100%;
}

body {
  position: relative;
  min-height: 100%;
  padding: 0;
  margin: 0;
}

body::after {
  content: '';
  display: block;
  height: $footerHeight;
}

</style>
