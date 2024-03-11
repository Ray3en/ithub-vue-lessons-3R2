<template>
    <h1 @click="deleteByTitle">{{ title }}</h1>
</template>

<script>
    export default {
        props: ['title'],
        emits: ['deleteByTitle'],
        methods: {
            deleteByTitle(){
                this.$emit('deleteByTitle', this.title);
            }
        }
    }
</script>