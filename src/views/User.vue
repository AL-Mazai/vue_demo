<template>
    <div>
        <table>
            <tr>
                <td>编号</td>
                <td>名字</td>
            </tr>
            <tr v-for="user in users"  :key="user.userId">
                <td>{{user.userId}}</td>
                <td>{{user.userName}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "User",
    data(){
        return {
            users:[]
        }
    },
    created() {
        this.getUser()
    },
    methods:{
        getUser(){
            const vm = this
            axios.get('http://localhost:8084/get').then(function(resp) {
                vm.users = resp.data;
            })
        }
    }
}
</script>

<style scoped>
table {
    font-size:20px;
    border:1px solid black;
    margin-left:auto;
    margin-right:auto
}
</style>
