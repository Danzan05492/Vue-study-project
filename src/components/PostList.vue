<template>
    <ul v-if="this.posts.length > 0">
        <h3>Список постов</h3>
        <transition-group name="user-list">
        <post-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove', post)"/>
        </transition-group>
    </ul>
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

<style langscoped>
ul{
    text-align: center;
}
.user-list-item {
  margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.4s ease;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.user-list-move {
  transition: transform 0.8s ease;
}


</style>