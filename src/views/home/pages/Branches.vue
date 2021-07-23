<template>
  <div>
      <v-list flat>
        <v-list-item-group
            v-model="model"
            color="indigo"
        >
          <v-list-item
              v-for="(item, i) in branches"
              :key="i"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Branches',
  data () {
    return {
      branches: [],
      model: 1,
    }
  },
  created() {
    this.loadBranches()
  },
  methods: {
    loadBranches() {
      try {
        axios.get('https://api.github.com/repos/andrew221293/git-commit-history/branches').
        then(res => {
          this.branches = res.data;
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