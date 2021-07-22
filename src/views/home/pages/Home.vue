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
  mounted() {
    window.setInterval(() => {
      getHistoryCommits.then(response => {
        console.log(response.data.length);
        console.log(this.commits.length);
        const equal = _.isEqual(this.commits, response.data)
        if (!equal) {
          console.log('Es hora de agregar');
          this.commits = response.data
        }
      }).
      catch(err => console.log(err)).
      finally(()=> console.log('Finish'));
    }, 10000)
  },
  created() {
    getHistoryCommits.then(response => {
      this.commits = response.data
    }).
    catch(err => console.log(err)).
    finally(()=> console.log('Finish'));
  }
}
</script>

<style scoped>
</style>
