<template>
    <div class="navigation">
        <div class="container"> 
            <router-link class="btn btn-primary" to="/exercise-1">Exercise 1</router-link>
            <router-link class="btn btn-primary" to="/exercise-2">Exercise 2</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
    .navigation{
        text-align: center;
        background: #000;
        padding: 20px;
    }
    .navigation a{
        margin: 0 5px;
    }
</style>