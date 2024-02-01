<template>
    <div class="form">
        <input-elem @changeProp="changeProp" value_elem="name" placeholder="Name" type="text"></input-elem>
        <input-elem @changeProp="changeProp" value_elem="phone" placeholder="Phone" type="tel"></input-elem>
        <input-elem @changeProp="changeProp" value_elem="email" placeholder="Email" type="email"></input-elem>
        <input-elem @changeProp="changeProp" value_elem="date" placeholder="Date" type="date"></input-elem>
    </div>  

</template>


<script>
    import InputElem from '../UI/InputElem.vue';

    export default {
        components: {
            InputElem
        },
        props: {
            form: Object
        },
        emits: ['changeProp'],
        methods: {
            changeProp(prop, title){
                this.$emit('changeProp', prop, title)
            }
        }
    }
</script>

<style>
    .form{
        display: inline;
    }

    @media(max-width: 800px){
        .form{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 25px
        }
    }

</style>