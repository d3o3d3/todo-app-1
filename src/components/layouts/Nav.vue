<template>
  <header>
    <b-navbar variant="primary" type="dark">
      <div class="container">
        <b-navbar-brand>
          <b-icon icon="pen"></b-icon>
          오늘의 할일
        </b-navbar-brand>
        <b-button size="sm" variant="primary">
          <b-icon icon="lock"></b-icon>
          로그인
        </b-button>
      </div>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style lang="scss">

header {
  color: inherit;
}

</style>
