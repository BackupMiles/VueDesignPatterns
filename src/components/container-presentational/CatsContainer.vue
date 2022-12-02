<template>
  <CatRender :fetchedData="fetchedCats"></CatRender>
</template>

<script>
import CatRender from './CatRender'
const catsUrl = 'https://api.thecatapi.com/v1/images/search?limit=5'

export default {
  data() {
    return {
      fetchedCats: []
    }
  },
  components: {
    CatRender
  },
  async created() {
    // get cats images from catsUrl
    this.fetchedCats = await fetch(catsUrl).then(r => r.json());
  },
}
</script>