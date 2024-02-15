<template>
    <h2>Home view!</h2>
    <button @click="navigateToError">Go to 404</button>
</template>

<script>
    export default {
        methods: {
            navigateToError(){
                this.$router.push('/abcd')
                // this.$router.replace('/abcd')
                // this.$router.go(-1)
            }
        }
    }
</script>