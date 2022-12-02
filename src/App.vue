<template>
    <WithLoader :url="catsUrl" :component-to-render="CatRender" />
  </template>
  
  <script>
  import WithLoader from './components/hoc/WithLoader.vue'
  import CatRender from './components/container-presentational/CatRender.vue'
  const catsUrl = 'https://api.thecatapi.com/v1/images/search?limit=5'
  
  export default {
    name: 'App',
    data() {
      return {
        catsUrl,
        CatRender
      }
    },
    components: {
      WithLoader
    }
  }
  </script>
  
  <style>
  body {
    margin: 0px;
    background-color: #333;
  }
  </style>
  