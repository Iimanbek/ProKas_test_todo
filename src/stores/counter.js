import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNoteStore = defineStore('note',  {
  state: () => ({
    data: null
  }),
  actions:{
    async getNotes(){
      const URL = 'http://localhost:3000/notes'
      let response = await fetch(URL)
      this.data = await response.json() || null
    }
  }
})
