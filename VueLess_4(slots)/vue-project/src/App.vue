<script>
import ContentSlot from './components/ContentSlot.vue'
import LoopSlot from './components/LoopSlot.vue'
import ButtonSlot from './components/ButtonSlot.vue'

  export default {
    components: {
      ContentSlot, LoopSlot, ButtonSlot
    },
    data(){
      return {
        a: 'Stroke!'
      }
    }
  }
</script>

<template>
  <!-- Пример использования слотов -->
  <!-- 
  <content-slot>
    some text
  </content-slot> 
  -->

  
  <!-- 
  <content-slot>
    <h4>Test!</h4>
  </content-slot> 
  -->

  <!-- Именованные слоты -->
  <!-- 
    <content-slot>
    <template v-slot:block1>
      <h4>Block</h4>
      <h4>Content</h4>
    </template>
    <template v-slot:block2>
      <h4 @click="console.log('123')">Main</h4>
      <h4>Section</h4>
      <p>{{ a }}</p>
    </template>
  </content-slot> 
  -->
  
  <!-- Получание параметра из дочерная компонента -->
  <!-- Пример 1 -->
  <!-- <loop-slot>

    <template v-slot:block2="slots">
        <h3>{{ slots.user.name }}</h3>
        <p> {{ slots.user.age }}</p>
    </template>

    <template v-slot:block1="slots">
      <p>{{ slots.data }}</p>
    </template>
  </loop-slot> -->

  <!-- <loop-slot>
    <template v-slot="slots">
      <h1>{{ slots.data }}</h1>
    </template>
  </loop-slot> -->

  <!-- <loop-slot>
    <template v-slot="slots">
      <ul>
        <li>{{ slots.data }}</li>
      </ul>
    </template>
  </loop-slot> -->

  <!-- Пример 2  (цикл)-->

  <!-- <loop-slot>
    <template v-slot="slots">
      <h5>{{ slots.string }}</h5>
    </template>
  </loop-slot>


  <loop-slot>
    <template v-slot="slots">
      <button>{{ slots.string }}</button>
    </template>
  </loop-slot> -->

  <button-slot>
      <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
      Auth
  </button-slot>
</template>