import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import * as echarts from 'echarts'

// createApp(App).use(store).use(router).mount('#app');
const  app =createApp(App);
//引入Element Ioc
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// app.config.globalProperties.Axios=Axios; //this.Axios
// app.config.globalProperties.fetchJsonp=fetchJsonp; // this.fetchJsonp
app.use( ElementPlus,{locale:locale});
app.use('echarts');

app.use(store).use(router).mount('#app');
