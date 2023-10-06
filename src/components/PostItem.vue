<template>
    <li class="post">
        <div>
        <div>{{ post.id }}</div>
        <div style="text-align: left; margin-bottom: 10px;"><strong>Название:</strong>{{ post.title }}</div>
        <div style="text-align: left; "><strong>Описание:</strong>{{ post.body }}</div>    
        </div>
        <div class="post__btns">
            <my-button
            @click="$emit('remove',post)"
            >
                Удалить
            </my-button>
        </div>
    </li>
</template>

<script>

    export default {
      
     props:{
        post:{
           type: Object,
           required: true,
        }
     }   
    }
</script>

<style scoped>
.post{
    display: inline-block;
    width: 20%;
    padding: 15px;
    border: 2.5px solid teal;
    margin-left: 15px;
    margin-top: 15px;
    min-height: 320px;
    min-width: 250px;
    vertical-align: top;
    position: relative;
}
.post__btns{
position: absolute;
right: 10%;
top: 80%;
}
</style>