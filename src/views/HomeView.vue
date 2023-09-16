<script >
import Notes from "@/components/Notes.vue";
export default{
  components:{
    'v-notes':Notes
  }
}
</script>

<template>
  <main>
    <div class="container">
      <h1>Notes</h1>
      <v-notes/>
    </div>
  </main>
</template>

<style>
h1{
  text-align: center;
  font-size:58px;
  padding: 30px 0;
}
</style>