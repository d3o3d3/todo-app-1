<template>
  <footer>
    <div class="container">
      <span>
        Copyright &copy; DevKor Fullstack
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss">

footer {
  height: $footerHeight;
  position: absolute;
  bottom: 0;
  width: 100%;

  background-color: #eee;

  div.container {
    padding-left: 0;

    span {
      display: inline-block;
      vertical-align: middle;
    }
  }
}

</style>
