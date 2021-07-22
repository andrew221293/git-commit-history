const axios = require('axios').default;

export const getHistoryCommits = axios.get('https://api.github.com/repos/andrew221293/git-commit-history/commits');