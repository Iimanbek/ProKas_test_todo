<script>

import NoteTodoList from "@/components/NoteTodoList.vue";
export default {
  name: "NoteItemView",
  components:{
    'v-note':NoteTodoList
  },
}
</script>

<template>
  <div class="container">
    <v-note/>
  </div>
</template>

<style scoped>

</style>