import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui'
import { Button, Form, FormItem, Input, Message, Container, Main, MenuItem, Header, Aside, Menu, Submenu, Col, Image, Breadcrumb, BreadcrumbItem, Card, Row, Table, TableColumn, Switch, Tooltip, PageHeader, Pagination, Dialog, MessageBox } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/global.css'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.config.productionTip = false

Vue.use(VueAxios, axios)
// Vue.use(ElementUI)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Main)
Vue.use(MenuItem)
Vue.use(Menu)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Submenu)
Vue.use(Col)
Vue.use(Image)
Vue.use(Image)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(PageHeader)
Vue.use(Pagination)
Vue.use(Dialog)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
axios.interceptors.request.use(config => {
    //在请求头上加入Authorization属性值
    config.headers.Authorization = window.sessionStorage.getItem("token")
    return config;
})
// Vue.prototype.$http = axios
// axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
// axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')