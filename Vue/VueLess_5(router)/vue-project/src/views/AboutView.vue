<template>
    <h2>About view!</h2>
    <p>title: {{ title }}</p>
    <p>value: {{ value }}</p>
</template>

<script>
    export default {
        props: {
            title: String,
            value: String
        },
        mounted(){
            // console.log(this.$route.params.title)
            // console.log(this.$route.matched)
            // console.log(this.$route.fullPath)
            console.log(this.title)
        }
    }
</script>