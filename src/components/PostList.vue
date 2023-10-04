<template>
    <div class="post" v-for="post in posts" :key="post.id">
        <div><strong>Название:</strong>{{ post.title }}</div>
        <div><strong>описание:</strong>{{ post.body }}</div>
    </div>
</template>

<script>
export default{
    props:{
        posts:{
            type: Array,
            requared: true
        }
    }
}
</script>

<style scoped>
.post{
  padding: 15px;
  border: 2.5px solid teal;
  margin-top: 15px;
}
</style>