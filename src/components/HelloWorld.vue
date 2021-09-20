<template>
  <div>
    <div class="h1-border">
      <h1 class="font-bold">Discover your new home</h1>
    </div>
    <div class="search">
    <input class="" type="text" placeholder="search">
    <button class="search-button" type="submit" >
      <i class="fas fa-search"></i>
    </button>
  </div>
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
    background-image: url('~@/assets/hero.jpg');
    background-position: center;
  }

  h1 {
    margin: 5px -15px -10px 5px;
    font-size: 4rem;
    color: #f1f1f1;
    background: #2c3e50;
    padding: 0.4rem 1.2rem 0 1rem;
    border: #f1f1f1 5px solid;
  }

  .h1-border {
    background-color: #5c83aa;
    padding: 0.1rem 0;
  }

.search {
    display: flex;
    justify-content: center;
    margin: 2rem auto;
    background-color: #ffffff;
    width: 300px;
    height: 40px;
    border-radius: 30px;
}

.search input {
    margin: 0 0 0 1rem;
    width: 100%;
}

.search-button {
    color: #fff;
    background: #2c3e50;
    border-radius: 0 30px 30px 0;
    width: 40px;
    height: 40px;
}

</style>
