<template>
    <div id="employees-list">
        <h1>EmployeesList</h1>
        <ul>
            <li v-for="employee of employees" :key="employee.id">
                {{ employee.employee_name }}
            </li>
        </ul>

        <button @click="createEmployee">Create</button>
    </div>
</template>

<script>

    export default {
        name: "EmployeesList",
        methods: {
            createEmployee() {

            },
            getEmployees() {
                this.$store.dispatch('getEmployees') // - actions
               // this.$store.commit() - mutation
            }
        },
        created() {
            this.getEmployees()
        },
        computed: {
            employees() {
                return this.$store.getters.employees
            }
        }
    }
</script>

<style scoped>

</style>