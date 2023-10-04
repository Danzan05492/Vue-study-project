<template>
    <form @submit.prevent>
        <h4>Создание поста</h4>
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
    </form>
</template>

<script>
export default{
    data() {
        return {
            post: {
                title: '',
                body: '',
            }
        }
    }
}
</script>

<style>
.input{
  width: 100%;
  border: 2.5px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
form{
  display: flex;
  flex-direction: column;
}
.btn{
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  color: teal;
  background: none;
  border: 1px solid teal;
}
</style>