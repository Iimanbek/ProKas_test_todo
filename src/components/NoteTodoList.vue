<script>
import {mapStores} from "pinia";
import {useNoteStore} from "@/stores/counter";

export default {
  name: "NoteTodoList",
  data(){
    return{
      toDoValue:''
    }
  },
  computed:{
    ...mapStores(useNoteStore)
  },
   async mounted(){
    await this.noteStore.getSingleNote(this.$route.params.id)
  }
}
</script>

<template>
  <div class="list_wrapper">
    <div class="list_wrapper_heading">
      <h2>{{noteStore?.noteItem?.heading}}</h2>
    </div>
    <form class="form">
      <input type="email" class="form__field" placeholder="To - Do " v-model="noteStore.inputValue" />
      <button @click="noteStore.addToDoList($route.params.id, noteStore?.noteItem?.heading)" type="button" class="btn btn--primary btn--inside uppercase">save</button>
    </form>
    <div class="list_inner" v-if="noteStore?.noteItem?.to_do">
      <ol v-for="deal in noteStore?.noteItem?.to_do">
        <li>
          <label class="li_inner">
            <input type="checkbox" >
            <span class="checkmark">{{deal.title}}</span>
          </label>

          <div>
            <button  class="button">change</button>
            <button @click="noteStore.deleteToDoList(deal.id, noteStore?.noteItem?.heading, $route.params.id)" class="button">delete</button>
          </div>
        </li>
      </ol>
    </div>
    <div v-else class="list_inner">
      <h2>Empty List...</h2>
    </div>
  </div>
</template>

<style scoped>
.li_inner input{
  scale: 1.5;
  margin-right: 10px;
}
:root {
  background: #f5f6fa;
  color: #9c9c9c;
  font: 1rem "PT Sans", sans-serif;
}

.uppercase {
  text-transform: uppercase;
}

.btn {
  display: inline-block;
  background: transparent;
  color: inherit;
  font: inherit;
  border: 0;
  outline: 0;
  padding: 0;
  transition: all 200ms ease-in;
  cursor: pointer;
}
.btn--primary {
  background: gray;
  color: #fff;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 12px 36px;
}
.btn--primary:hover {
  background: #a2a2a2;
}
.btn--primary:active {
  background: #504f4f;
  box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);
}
.btn--inside {
  margin-left: -96px;
}

.form__field {
  width: 360px;
  background: #fff;
  color: #a3a3a3;
  font: inherit;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  border: 0;
  outline: 0;
  padding: 20px 18px;
}
.list_inner{
  border-radius: 3px;
  padding: 15px 10px 15px 25px ;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  background: gray;
  width: 700px;
}
.list_inner h2{
  text-align: center;
}
.list_inner ol {
  line-height: 55px;
}
.list_inner ol li{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list_wrapper_heading{
  text-transform: capitalize;
  font-size: 35px;
  margin: 30px 0;
}
.list_wrapper{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

</style>