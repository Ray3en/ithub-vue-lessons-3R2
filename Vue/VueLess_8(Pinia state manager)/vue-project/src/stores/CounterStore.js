import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

// Compisition API

export const useCounterStore = defineStore('countStore', () => {
    let count = ref(0)

    const doubleValue = computed(() => {
        return count.value ** 2
    })

    const increment = () => {
        count.value++
    }

    const decrement = () => {
        count.value--
    }

    const changeValue = (num) => {
        count.value = num
    }

    const randomValue = async () => {
            let url = 'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new'
            let res = await axios.get(url)
            count.value = res.data
    }

    // Задание: дописать два оставшихшся экшена 
 
    return {
        count,
        doubleValue,
        increment,
        decrement,
        changeValue,
        randomValue
    }
})


// Option API
// export const useCounterStore = defineStore('countStore', {
//     state: () => ({
//         count: 0,
//     }),
//     getters: {
//         doubleValue(){
//             return this.count ** 2
//         },
//     },
//     actions: {
//         increment(){
//             this.count++
//         },
//         decrement(){
//             this.count -= 1
//         },
//         changeValue(num){
//             this.count = num
//         },
//         async randomValue(){
//             let url = 'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new'
//             let res = await axios.get(url)
//             this.count = res.data
//         }
//     }
// })
