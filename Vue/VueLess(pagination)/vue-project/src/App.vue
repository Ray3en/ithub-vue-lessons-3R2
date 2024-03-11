<script setup>
import CardList from './components/CardList.vue'
import Pagination from './components/Pagination.vue'
import { computed, onMounted, reactive, ref } from 'vue';
import axios from 'axios'
 
let page = ref(1)
let countElemPage = ref(6)
let recipes = reactive({
  items: [],
  countElem: 0
})

const changePage = (num) => {
  page.value = num
}

const computedrRcipes = computed(() => {
  let last_elem = page.value * countElemPage.value
  let first_elem = last_elem - countElemPage.value
  return recipes.items.slice(first_elem, last_elem)
})

const countPagesArray = computed(() => {
   let countPages = Math.ceil(recipes.countElem / countElemPage.value)
   return Array(countPages).fill('1').map((el, ind) => ind + 1)
})

onMounted( async () => {
  let url = 'https://dummyjson.com/recipes'
  let res = await axios.get(url)
  recipes.items = res.data.recipes
  recipes.countElem = res.data.recipes.length
})



</script>

<template>
<button @click="page++">Click</button>
<pagination 
  @changePage="changePage" 
  :page="page" 
  :countPagesArray="countPagesArray">
</pagination>
<card-list 
  :page="page" 
  :recipes="computedrRcipes">
</card-list>
</template>


<style>

</style>


