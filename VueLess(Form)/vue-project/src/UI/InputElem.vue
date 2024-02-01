<template>
    <input @input="changeProp" class="inp_elem" :placeholder="placeholder" :type="type">
</template>

<script>
    export default {
        props: {
            placeholder: String,
            type: String,
            value_elem: String
        },
        emits: ['changeProp'],
        methods: {
            changeProp(e){
                this.$emit('changeProp', this.value_elem, e.target.value)
            }
        }
    }
</script>


<style>
    .inp_elem{
        padding: 10px 25px;
        border-radius: 15px;
        border: 1px solid black;
        outline: none;
    }
</style>