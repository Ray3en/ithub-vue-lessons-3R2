<script setup>
import CardItem from './CardItem.vue'
let props = defineProps({
    recipes: Array
})

</script>

<template>
<div class="container">
  <card-item 
    v-for="card in recipes" :key="card.id"
    :name="card.name"
    :image="card.image"
    :id="card.id"
  >
  </card-item>
</div>
</template>

<style>
.container{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;

}
</style>