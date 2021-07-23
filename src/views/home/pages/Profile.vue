<template>
  <div>
    <v-card
        class="mx-auto"
        max-width="344"
    >
      <v-img
          :src="this.user.avatar_url"
          height="200px"
      ></v-img>

      <v-card-title>
        {{ this.user.name }}
      </v-card-title>

      <v-card-subtitle>
        {{ this.user.login }}
      </v-card-subtitle>

    </v-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Profile',
  data () {
    return {
      user: [],
    }
  },
  created() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      try {
        axios.get('https://api.github.com/users/andrew221293').
        then(res => {
          console.log(res);
          this.user = res.data;
        })
      } catch (error) {
        console.error(error)
      }
    },
  }
};
</script>

<style scoped>

</style>