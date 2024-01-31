<script>
  import Counter from './components/Counter.vue'
  import UserList from './components/UserList.vue'
  import BlockItem from './components/BlockItem.vue'

  // Задание. 
  // Создайте компонент ProductCard, который будет формировать разметку 
  // с Заголовокм (имя товара), параграфом (цена товара), а также кнопка, которая должна будет удалять 
  // сам товар (X).
  // Необходимо пройтись по модели products и циклично вернуть компонент ProductCard, передав все необходиые
  // пропы, в том числе и метод, который реализует удаление по ID (по клику на кнопку)

  export default {
    components: {Counter, UserList, BlockItem},
    data(){
      return{
        array: ['Один', "Два", "Три"],
        products: [
          {id: 1, title: 'Item 1', price: 100},
          {id: 2, title: 'Item 2', price: 200},
          {id: 3, title: 'Item 3', price: 300},
          {id: 4, title: 'Item 4', price: 400}
        ]
      }
    },
    methods: {
      deleteByTitle(title){
        this.array = this.array.filter(elem => elem !== title)
      }
    }
  }
</script>

<template>
  <!-- <Counter/> -->
  <!-- <user-list></user-list> -->  

  <!-- Примеры передачи пропов и методов -->
  <!-- <props-example title="message!" :numbers="array"></props-example> -->
  <block-item
    :array="array"
    @deleteByTitle='deleteByTitle'
  >
  </block-item>


</template> 

