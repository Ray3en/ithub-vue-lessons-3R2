<script >
  import ButtonElem from './UI/ButtonElem.vue'
  import FormElem from './components/FormElem.vue'
  import HeaderElem from './components/HeaderElem.vue'

  export default {
    components: {ButtonElem, FormElem, HeaderElem},
    data(){
      return{
        form: {
          name: '',
          email: '',
          phone: '',
          date: ''
        }
      }
    },
    methods: {
      submitHandle(){
        console.log({...this.form})
      },
      changeProp(prop, value){
        this.form[prop] = value 
      }
    }
  }

</script>

<template> 
  <header-elem></header-elem>
  <div class="main">
    <form-elem @changeProp="changeProp" :form="form"></form-elem>
    <button-elem @submitHandle="submitHandle" title="Submit"></button-elem>
  </div>
</template>

<style scoped>
  .main{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px
  }
</style>
