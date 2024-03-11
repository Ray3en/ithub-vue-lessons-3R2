<template>
  <h2 class="item">Hello world!</h2>
  <!-- 
  <Block/>
  <ContentList/> 
  -->
  <Cycle></Cycle>
</template>

<script>
import Block from './components/Block.vue'
import ContentList from './components/ContentList.vue'
import Cycle from './components/Cycle.vue'

export default {
  components: {
    Block, ContentList, Cycle
  }
}
</script>

<style scoped>
  .item{
    color: red;
  }
</style>