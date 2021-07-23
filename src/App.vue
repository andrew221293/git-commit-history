<template>
  <v-app>
    <Toolbar name="Home"/>
    <Home/>
  </v-app>
</template>

<script>
import Toolbar from './views/home/components/Toolbar'
import Home from '@/views/home/pages/Home';

export default {
  name: 'App',

  components: {
    Toolbar,
    Home
  },

  data: () => ({
    //
  }),
};
</script>
