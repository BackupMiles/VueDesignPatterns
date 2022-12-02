import { h } from "vue";

export function withLoader(component, url, loader) {
    return {
        data() {
            return {
                fetched: null
            }
        },
        async created() {
            setTimeout(async () => {
                this.fetched = await fetch(url).then(r => r.json());
            }, 1000)
        },
        render() {
            return this.fetched ? h(component, { data: this.fetched }) : h(loader);
        }
    }
}