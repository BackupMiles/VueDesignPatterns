<template>
    <div class="cats">
        <img 
            v-for="(cat, idx) in fetchedData"
            :src="cat.url"
            :key="idx" />
    </div>
</template>

<script>
export default {
    props: {
        fetchedData: Array
    }
}
</script>

<style scoped>
.cats {
    display: grid;
    gap: 100px;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
}

img {
    width: 350px;
    aspect-ratio: 16/9;
    border-radius: .5rem;
}
</style>