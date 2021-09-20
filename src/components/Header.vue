<template>
<div>
  <header>
    <i class="icon fas fa-house-user fa-2x"></i>
    <p class="brand">Northern Estate Agents</p>
    <div id="nav">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/buy">Buy</router-link></li>
      <li><router-link to="/sell">Sell</router-link></li>
      <li><router-link to="/rent">Rent</router-link></li>
      <li><router-link to="/landlords">Landlords</router-link></li>
      <li><router-link to="/students">Students</router-link></li>
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

<style>
  header {
    display: flex;
    margin: 0 auto;
    place-items: center;
    justify-content: center;
    color: #333 ;
    padding: 2rem;
  }

  .brand {
    display: flex;
    position: absolute;
    left: 60px;
    justify-content: flex-start;
    font-weight: 600;
    font-size: 1.4rem;
  }

  .icon{
    display: flex;
    position: absolute;
    left: 1.2rem;
    padding-right: 5px;
    color: #2c3e50;
  }

#nav {
  display: flex;
  position: absolute;
  right: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #fd5f5f;
}

ul {
  display: flex;
  float:right;
}

li {
  display: flex;
  padding-right: 1rem;
  text-decoration: none;
}

li>:last-child {
  padding-right: 0;
}

</style>
