<template>
    <props-example
        v-for="(elem, ind) in array"
        :key="ind"
        :title="elem"
        @deleteByTitle="this.$emit('deleteByTitle', elem)"
        >
    </props-example>
</template>

<script>
import PropsExample from './PropsExample.vue';

export default {
    props: ['array'],
    emits: ['deleteByTitle'],
    components: {PropsExample }
}
</script>