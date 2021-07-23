<template>
  <v-app>
    <Toolbar/>
  </v-app>
</template>

<script>
import Toolbar from './views/home/components/Toolbar'

export default {
  name: 'App',

  components: {
    Toolbar,
  },

  data: () => ({
    //
  }),
};
</script>
