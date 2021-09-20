<template>
  <div class="home">
    <HelloWorld />
  </div>
  <Options/>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Options from '@/components/Options.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Options
  }
}
</script>
