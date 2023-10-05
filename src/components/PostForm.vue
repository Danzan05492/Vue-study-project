<template>
    <form @submit.prevent>
        <h4>Создание поста</h4>
<<<<<<< HEAD
        <input 
            v-bind:value="post.title"
            @input="post.title = $event.target.value"
            class="input" 
            type="text" 
            placeholder="Название"
        >
        <input 
            v-bind:value="post.body"
            @input="post.body = $event.target.value"
            class="input" 
            type="text" 
            placeholder="Описание"
        >
        <button class="btn" 
        
        >
        Создать
    </button>
=======
        <my-input
            v-model="post.title"
            type="text" 
            placeholder="Название"
        />
        <my-input 
            v-model="post.body" 
            type="text" 
            placeholder="Описание"
        />
        <my-button
        style="align-self: flex-end; margin-top: 15px;" 
        @click="createPost"
        >
        Создать
    </my-button>
>>>>>>> 38431b2 (add components and library for global export of components)
    </form>
</template>

<script>
<<<<<<< HEAD
export default{
=======

export default{
  
>>>>>>> 38431b2 (add components and library for global export of components)
    data() {
        return {
            post: {
                title: '',
                body: '',
            }
        }
<<<<<<< HEAD
=======
    },
    methods:{
        createPost(){
      this.post.id = Date.new;
      this.$emit('create', this.post)      
      this.post ={
      title:'',
      body:''
      }
        }
>>>>>>> 38431b2 (add components and library for global export of components)
    }
}
</script>

<style>
<<<<<<< HEAD
.input{
  width: 100%;
  border: 2.5px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
=======
>>>>>>> 38431b2 (add components and library for global export of components)
form{
  display: flex;
  flex-direction: column;
}
<<<<<<< HEAD
.btn{
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  color: teal;
  background: none;
  border: 1px solid teal;
}
=======
>>>>>>> 38431b2 (add components and library for global export of components)
</style>