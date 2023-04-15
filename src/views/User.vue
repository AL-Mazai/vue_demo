<template>
    <div>
        <table>
            <tr>
                <td>编号</td>
                <td>名字</td>
            </tr>
            <tr v-for="book in users">
                <td>{{book.id}}</td>
                <td>{{book.name}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from "core-js/internals/queue";

export default {
    name: "User",
    data(){
        return {
            users:[
                {
                    id: 1,
                    name: '三体',
                },
                {
                    id: 2,
                    name: 'java从零到入土',
                }
            ]
        }
    },
    created() {
        // let that = this;
        axios.get('http://localhost:8084/get').then(function (resp) {
            this.users = resp.data;
        })
    }
}
</script>

<style scoped>

</style>
