<template>
  <div class="students">
    <Students />
  </div>
  <Options/>
</template>

<script>
// @ is an alias to /src
import Students from '@/components/Students.vue'

export default {
  name: 'Home',
  components: {
    Students
  }
}
</script>

<style scoped>

</style>
