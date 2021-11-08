import { createApp } from 'vue'
import App from './App.vue'

// import ElementPlus from "element-plus"
// import "element-plus/theme-chalk/src/index.scss"

// const app = createApp(App)
// app.use(ElementPlus)

import { ElDatePicker } from "element-plus"
import "element-plus/theme-chalk/src/index.scss"

const app = createApp(App)
app.component(ElDatePicker.name, ElDatePicker)

app.mount('#app')
