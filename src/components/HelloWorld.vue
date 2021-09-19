<template>
  <div>
    <h1>Welcome to your new home!</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String
  }
}
</script>

<style>

  .home {
    display: flex;
    place-items: center;
    justify-content: center;
    text-align: center;
    height: 500px;
    font-size: 1.4rem;
    background-image: linear-gradient(45deg, rgb(100, 255, 100), rgb(123, 189, 255));
    background-image: url('~@/assets/hero.jpg');
    background-blend-mode:difference;
    background-position: center;
  }

  h1 {
    font-size: 5rem;
    color:#303030;
  }

</style>
