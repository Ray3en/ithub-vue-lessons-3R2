<template>
    <div>
        <img width="300" height="300" :src="image">
        <h2>{{id+' '+name}}</h2>
    </div>
</template>

<script setup>
const props = defineProps({
    name: String,
    image: String,
    id: Number
})



</script>