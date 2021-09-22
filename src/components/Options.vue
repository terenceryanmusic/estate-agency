<template>
    <div class="options">
        <div class="rent">
            <h2>Rent</h2>
            <i class="icons fas fa-couch fa-2x"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div class="buy">
            <h2>Buy</h2>
            <i class="icons fas fa-search-dollar fa-2x"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="sell">
            <h2>Sell</h2>
            <i class="icons fas fa-chart-line fa-2x"></i>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Options',
  props: {
    title: String
  }
}
</script>

<style scoped>
    .options {
        display: flex;
        flex-wrap: wrap;
        background-color: #2c3e50;
        padding: 4rem;
        place-content: space-evenly;
    }
    .rent, .buy, .sell {
        width: 33%;
        padding: 0 0.5rem;
        border-right: #5c83aa 1px solid;
    }
    .sell {
        border-right: none;
    }

    h2 {
        color: #5c83aa;
        font-size: 2.6rem;
    }
    p {
        color: #f1f1f1;
        font-size: 1rem;
    }
    .icons {
        color: #f1f1f1;
        background-color: #5c83aa;
        width: 75px;
        height: 75px;
        padding: 1.4rem 0;
        margin: 1rem 0;
        border-radius: 40px;
    }
</style>
