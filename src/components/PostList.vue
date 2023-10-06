<template>
    <div v-if="this.posts.length > 0">
        <h3>Список постов</h3>
        <post-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove', post)"/>
    </div>
    <h2 v-else style="color: red">
        Список постов пуст...
    </h2>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
export default{
    components: { PostItem},
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
  border-radius: 15px;
  margin-top: 15px;
}
</style>