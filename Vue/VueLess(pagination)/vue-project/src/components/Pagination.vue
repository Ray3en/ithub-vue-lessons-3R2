<script setup>
    const props = defineProps({
        countPagesArray: Array,
        page: Number
    })

    const emit = defineEmits(['changePage'])

    const changePage = (num) => {
        emit('changePage', num)
    }
</script>

<template>
    <div class="pagination_wrapper">
        <button @click="changePage(page - 1)" :disabled="page <= 1"><</button>
        <button 
            v-for="numb in countPagesArray" 
            :key="numb" 
            @click="changePage(numb)">
                {{ numb }}
        </button>
        <button @click="changePage(page + 1)" :disabled="page === countPagesArray.length">></button>
    </div>  
</template>


<style>
.pagination_wrapper{
    display: flex;
    gap: 10px;
    justify-items: center;
}
</style>