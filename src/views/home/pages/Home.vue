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
import {getHistoryCommits} from '@/views/home/components/services/gitHubServices';
import _ from 'lodash';

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
    loadCommits() {
      getHistoryCommits.
      then(res => {
        if (!_.isEqual(this.commits, res.data)) {
          this.commits = res.data;
        }
      }).
      catch(err => console.log(err)).
      finally(()=> console.log('Finish'));
      setTimeout(() => {
        this.loadCommits();
      },1000)
    },
  }
}
</script>

<style scoped>
</style>
