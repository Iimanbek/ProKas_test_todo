import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNoteStore = defineStore('note',  {
  state: () => ({
    data: null,
    noteItem:null,
    inputValue:''
  }),
  actions:{
    async getNotes(){
      const URL = 'http://localhost:3000/notes'
      let response = await fetch(URL)
      this.data = await response.json() || null
    },
    async deleteNotes(idNote){
      if (confirm('Are you sure that you want to delete it?')){
        const deleteMethod = {
          method:"DELETE",
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
        }
        const URL = `http://localhost:3000/notes/${idNote}`
        let response = await fetch(URL,deleteMethod)
        let  index= this.data.findIndex(i => i.id === idNote)
        this.data.splice(index, 1)
      }
    },
    async newNotePage(idNote){
      let name_of_Todo= prompt('Write the name of to do list page!!!')
      if (name_of_Todo){
        const postMethod = {
          method:"POST",
          body:JSON.stringify({
            "id": idNote,
            "heading": name_of_Todo,
            "to_do":[]
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        }
        console.log(postMethod)
        const URL = `http://localhost:3000/notes`
        let response = await fetch(URL,postMethod)
        this.router.push({path:`/note/${idNote}`})
      }else {
        alert('write something')
      }
    },
    //то что ниже уже относится к второй странице изменеия
    async getSingleNote(id){
      const URL =   `http://localhost:3000/notes/${id}`
      let response = await fetch(URL)
      this.noteItem = await response.json() || null
    },
    async addToDoList(paramsId, pageHeading){
      if (this.inputValue) {
        this.noteItem.to_do.push({
          id: this.noteItem.to_do.length +1,
          title:this.inputValue,
          status: false
        })
        const putMethod = {
          method:"PUT",
          body:JSON.stringify({
            "id":paramsId,
            "heading": pageHeading,
            "to_do":this.noteItem.to_do
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        }
        const URL = `http://localhost:3000/notes/${paramsId}`
        let response = await fetch(URL,putMethod)
      }else {
        alert('write something')
      }
      console.log(this.noteItem.to_do)
      this.inputValue=''
    },
    async deleteToDoList(todoID, pageHeading, paramsId){
      if (confirm('Are you sure that you want to delete it?')){
        let  index= this.noteItem.to_do.findIndex(i => i.id === todoID)
        this.noteItem.to_do.splice(index, 1)
        const putMethod = {
          method:"PUT",
          body:JSON.stringify({
            "id":todoID,
            "heading": pageHeading,
            "to_do":this.noteItem.to_do
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        }
        const URL = `http://localhost:3000/notes/${paramsId}`
        let response = await fetch(URL,putMethod)
      }
    }
  }
})
