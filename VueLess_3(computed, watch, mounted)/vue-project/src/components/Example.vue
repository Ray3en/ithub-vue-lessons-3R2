computed позволяет кэшировать результат вычеслений в случае, если модельки не будут изменены 
то есть в момент обновления результат заново вычислятся не будет

watch позволяет выполнить побочный код в случае, когда меняется конкретно указанная модель 
на модель мы ссылаемся формируя такое имя метода, который включает код, который будет выполнен в случаи изменения модели

mounted позволяет выполнить побочный код только в момент монтирования компонента

<template>
    <h2>User</h2>
    <input v-model="name"/>
    <input v-model="lastName"/>
    <p>{{ fullName }}</p>
    <p>{{ conditionName }}</p>
</template>

<script>
    export default {
        data(){
            return {
                name: 'Alex',
                lastName: 'Willyam'
            }
        }, 
        computed: {
            fullName(){
                return this.name + ' ' + this.lastName
            },
            conditionName(){
                return (this.name.length > 10) ? 'name > 10' : 'name <= 10'
            },
            // данное сво-во формируем для функции watch (чтобы следить за 2 модельками одновременно)
            fullNameWatch(){
                return [this.name, this.lastName]
            }
        },
        watch: {
            name(newValue, oldValue){
                console.log(newValue,'new name!')
                console.log(oldValue,'old name!')
            },
            lastName(){
                console.log('change lastName!')
            },
            // fullNameWatch(){
            //     console.log('change name & lastName!!!')
            // }
        },
        mounted(){
            console.log('mounted!')
            this.name = 'AHAHAHAHA'
        }
    }
</script>