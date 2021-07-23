<template>
  <div class="hello">
    <v-card v-for="(item, index) in commits" :key="index">
      <v-card-title> {{ item.commit.message }} </v-card-title>
      <v-card-subtitle>{{ item.commit.author.name }}</v-card-subtitle>
      <v-card-text>{{ item.commit.author.date }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
import _ from 'lodash';
import axios from 'axios';

export default {
  name: 'Home',
  data(){
    return {

      commits: [],
    }
  },
  created() {
    this.loadCommits();
  },
  methods: {
   async loadCommits() {
      try {
        await axios.get('https://api.github.com/repos/andrew221293/git-commit-history/commits').
        then(res => {
          if (!_.isEqual(this.commits, res.data)) {
            this.commits = res.data
          }
        })
      } catch (error) {
        console.error(error)
      }
      setTimeout(()=> {
        this.loadCommits()
      },1000)
    },
  }
}
</script>

<style scoped>
</style>
