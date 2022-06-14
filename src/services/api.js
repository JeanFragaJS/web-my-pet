const axios = require('axios')

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3838'
})

export default api;