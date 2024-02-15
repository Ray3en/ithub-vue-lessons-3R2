<template>
    <h2>Not Found 404</h2>
</template>

<script>
    export default {
        mounted(){
            setTimeout(() => {
                this.$router.push('/')
                // this.$router.go(-1)
            },2000)
        }
    }   
</script>