<template>
    <h2>Counter</h2>
    <h3>{{ count }}</h3>
    <button @click="count++">Incr</button>
    <button @click="incr(5)">Incr 5</button>
    <button @click="incr(100)">Incr 100</button>
    <button @click="decr(1)">Decr</button>
    <button @click="decr(100)">Decr 100</button>
    <button @click="console.log(count)">log Counter</button>
    <button @click="takeEvent(count, $event), incr(1)">Event handle and incr Count</button>
    <input @keydown="takeEvent('key', $event)"/>
</template>

<script>

    export default {
        data(){
            return {
                count: 0
            }
        },
        methods: {
            incr(n){
                this.count += n
            },
            decr(n){
                this.count -= n
            },  
            takeEvent(n, event){
                console.log(n)
                console.log(event)
                if (event.key === 'Enter'){
                    console.log('Enter!!!!!!!')
                }
            }
        }
    }
</script>