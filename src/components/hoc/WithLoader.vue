<template>
    <div>
        <div v-if="!dataFromFetch" class="loader">loading...</div>
        <component v-else :is="componentToRender" :fetchedData="dataFromFetch" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataFromFetch: null
        }
    },
    props: {
        url: String,
        componentToRender: Object
    },
    async created() {
        setTimeout(async () => {
            this.dataFromFetch = await fetch(this.url).then(r => r.json())
        }, 2000)
    }
}
</script>

<style scoped>
.loader {
    display: grid;
    background-color: black;
    opacity: .8;
    height: 100vh;
    color: white;
    justify-content: center;
    align-items: center;
}
</style>