<template>
<div>
  <header>
    <p class="brand">Northern Estate Agents</p>
    <div id="nav">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/buy">Buy</router-link></li>
      <li><router-link to="/sell">Sell</router-link></li>
      <li><router-link to="/rent">Rent</router-link></li>
      <li><router-link to="/landlords">Landlords</router-link></li>
    </ul>
  </div>
  </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}
</script>

<style scoped>
  header {
    display: flex;
    margin: 0 auto;
    place-items: center;
    justify-content: center;
    color: #333 ;
  }

  .brand{
    display: flex;
    align-items: flex-start;
    font-size: 1.2rem;
    font-weight: 600;
    position: absolute;
    left: 50px;
  }

#nav {
  display: flex;
  margin: 0 auto;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

ul {
  display: flex;
  justify-content: center;
}

li {
  display: flex;
  padding-right: 1rem;
  text-decoration: none;
}

li>:last-child {
  padding-right: 0;
}

.search {
  display: flex;
  position: absolute;
  right: 50px;
  width: 200px;
  height: 25px;;
}

.search input {
  display: flex;
}

</style>
