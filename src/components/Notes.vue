<script>
import {useNoteStore} from "@/stores/counter";
import {mapStores} from "pinia";

export default {
  name: "Notes",
  data(){
    return{

    }
  },
  computed:{
    ...mapStores(useNoteStore)
  },
  async mounted() {
    await this.noteStore.getNotes()
  }
}
</script>

<template>
  <div class="main_wrapper">
    <div class="add_new_note">+</div>
    <div v-for="item in noteStore.data" class="note_item">
      <h2 class="note_item_heading">{{item.heading}}</h2>
      <div class="note_item_inner">
        <div class="cuttedText ">
          <span class="pre_todo" v-for="todo_short_item in item.to_do" >{{todo_short_item.title}}...</span>
        </div>
        <div>
          <button class="button">Go</button>
          <button class="button">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.note_item_inner{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.button {
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 2px;
  box-shadow: rgba(213, 217, 217, .5) 0 1px 2px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  font-family: "Amazon Ember",sans-serif;
  font-size: 13px;
  line-height: 29px;
  padding: 0 20px 0 21px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  margin: 0 5px;
}

.button-13:hover {
  background-color: #f7fafa;
}

.button-13:focus {
  border-color: #008296;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  outline: 0;
}
.add_new_note{
  background: #222222;
  border: 2px solid gray;
  padding: 20px;
  font-size: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width:400px;
}
.note_item{
  background: #222222;
  border: 2px solid gray;
  padding: 20px;
  font-size: 20px;
  text-align: center;
  height: 80px;
  width:400px;
}
.cuttedText {
  font-size: 16px;
  display: block;
  width: 192.8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.main_wrapper{
  display: grid;
  grid-template-columns: auto auto auto ;
  padding: 5px;
}
.pre_todo{
  color: gray !important;
}
.note_item_heading{
  margin-bottom: 20px;
}
</style>