<template>
  <div>
    <v-toolbar Toolbar>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ this.name }}</v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/profile">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>

          <v-list-item to="/branches">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Branches</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>
  </div>
</template>

<script>
import VueRouter from 'vue-router';
import Home from '@/views/home/pages/Home';
import Profile from '@/views/home/pages/Profile';
import Branches from '@/views/home/pages/Branches';

const router = new VueRouter({
  routes: [
    {path: '/', component: Home},
    {path: '/profile', component: Profile},
    {path: '/branches', component: Branches},
    {path: '*', redirect: '/' }
  ]
})
export default {
  name: 'Toolbar',
  router,
  comments: {
    Home,
    Profile,
  },
  data (){
    return {
      drawer: false,
      group: null,
    }
  },
  props: {
    name
  },
};
</script>

<style scoped>

</style>