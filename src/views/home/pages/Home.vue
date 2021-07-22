<template>
  <div class="hello">
    <ul id="commits">
      <li v-for="(item, index) in items"
      :key="index">
        Probando el API de gitHub
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      items: [
        { mensaje: 'Foo' },
        { mensaje: 'Bar' }
      ]
    }
  }
}
</script>

<style scoped>
</style>
