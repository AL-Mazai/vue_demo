<template>
    <nav>
        <router-link to="/">User</router-link>
        |
        <router-link to="/login">Login</router-link>
        |
        <router-link to="/doc">Document</router-link>
    </nav>
    <router-view></router-view>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 20px;
    background-color: blanchedalmond;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
