import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home";
import EmployeesList from "../components/EmployeesList";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',  // http://site.com/
            component: Home
        },
        {
            path: '/employees',  // http://site.com/employees
            component: EmployeesList
        },
        /*{
            path: '/employees/:id', // http://site.com/employees/10
            component: Employee
        }*/
    ],
    mode: 'history'
})