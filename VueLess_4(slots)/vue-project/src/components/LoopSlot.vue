<template>
    <!-- Пример 1 -->
    <!-- <slot name="block1" :data="text"></slot>
    <slot name="block2" :user="obj"></slot> -->

    <!-- Пример 2  (цикл)-->
    <ul>
        <li v-for="elem in array" :key="elem">
            <slot :string="elem"></slot>
        </li>
        
    </ul>

    <button>
        werwer
    </button>
</template>

<script>
    export default {
        data(){
            return {
                text: 'Element!',
                obj: {
                    name: 'Alex',
                    age: 30
                },
                array: ['Один', "Два","Три","Четыре"]
            }
        }
    }
</script>




