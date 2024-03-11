<template>
    <h2>Cycle Methods example</h2>
    <p>{{ boolean }}</p>
    <button @click="handle">Change boolean</button>
    <p>{{ booleanComputed }}</p>
</template>



<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';

let boolean = ref(true)

const handle = () => (boolean.value = !boolean.value)

// Функция watch следит за изменением первого аргумента и выполняет побочный код
watch(boolean, (newValue, oldValue) => {
    console.log(boolean.value);
})

// computed формирует кешированние значение, которые используется на стороне разметки
let booleanComputed = computed(() => {
    return `${boolean.value} - это булевый тип`
})

// Отработка побочного кода после монтирования компонента
onMounted(() => {
    console.log('Cycle Methods mounted!')
})

// Отработка побочного кода после размонтирования компонента
onUnmounted(() => {
    console.log('Cycle Methods ummounted!')
})

</script>