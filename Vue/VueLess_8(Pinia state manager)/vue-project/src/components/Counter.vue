<template>
  <h2>Counter</h2>
  <h3>{{ counterStore.count }}</h3>
  <div>
    <p>
      <button @click="counterStore.decrement">-</button>
      <button @click="counterStore.increment">+</button>
    </p>
    <div>
        <input v-model="number" type="number"/>
        <button @click="changeValue">change value</button>
    </div>
    <button @click="counterStore.randomValue">Async random value</button>
  </div>
  <h2>Double value (getter)</h2>
  <h3>{{ counterStore.doubleValue }}</h3>
</template>

<script setup>
import {useCounterStore} from '@/stores/CounterStore'
import { ref } from 'vue';

const number = ref('')
const counterStore = useCounterStore()  

function changeValue(){
  counterStore.changeValue(+number.value)
}

</script>
