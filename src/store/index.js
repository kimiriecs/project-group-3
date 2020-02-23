import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        employees: []
    },
    getters: {
        employees(state) {
            return state.employees
        }
    },
    mutations: {
        fillEmployees(state, payload) {
            state.employees = payload
        }
    },
    actions: {
        getEmployees(context) {
            axios.get('http://dummy.restapiexample.com/api/v1/employees')
                .then(res => {
                    context.commit('fillEmployees', res.data.data)
                })
        }
    }
})
