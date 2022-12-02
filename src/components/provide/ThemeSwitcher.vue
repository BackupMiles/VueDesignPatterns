<template>
    <div @click="theme.switchTheme">
        <span>{{mode === "light"? "🌙" : "🌞"}}</span>
    </div>
</template>

<script>
export default {
    inject: ['theme'],
    data() {
        return {
            mode: this.theme.mode
        }
    }
}
</script>