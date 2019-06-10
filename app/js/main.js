/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable comma-dangle */
import Vue from "vue"
import App from "./App.vue"

export default {
    components: {
        App
    }
}

const root = document.createElement("div")
document.body.appendChild(root)

new Vue({
    render: (h) => h(App)
}).$mount(root)
