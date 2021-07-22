<template>
  <div class="hello">
    <ul id="commits">
      <li v-for="(item, index) in commits"
      :key="index">
        Probando el API de gitHub
      </li>
    </ul>
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
        console.log(error)
      }
      setTimeout(()=> {
        this.loadCommits()
      },10000)
    },
  }
}
</script>

<style scoped>
</style>
