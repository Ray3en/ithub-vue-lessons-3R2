<template>
    <button @click="submitHandle" class="btn_elem">{{ title }}</button>
</template>

<script>
    export default { 
        props: {
            title: String
        },
        emits: ['submitHandle'],
        methods: {
            submitHandle(){
                this.$emit('submitHandle')
            }
        }, 
    }
</script>


<style>
    .btn_elem{
        padding: 5px 15px;
        background-color: plum;
        border-radius: 15px;
        border: 1px solid black;
    }
</style>