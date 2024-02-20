<template>
    <div>
        {{ message }}
    </div>
    <button @click="handler">Click!</button>
</template>

<script setup>

// defineProps получает пропы от родителя
const {message} = defineProps({
    message: String
})

// defineEmits получает (регистрирует) методы переданные от родителя
const emit = defineEmits(['upperCase'])
function handler(){
    emit('upperCase')
}


</script>