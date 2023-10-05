<template>
<div class="app">
<<<<<<< HEAD
  <PostForm/>
  <PostList v-bind:posts="posts"/>
=======
  <post-form
   @create="createPost"
   />
   <post-list
   :posts="posts"
   @remove="removePost"
   />
>>>>>>> 38431b2 (add components and library for global export of components)
</div>
</template>

<script>
import PostForm from "./components/PostForm.vue"
import PostList from "./components/PostList.vue"

export default{
  components: {
    PostForm, PostList
  },
  data(){
    return{
      posts: [
        {id: 1, title: 'Javascript', body: 'Описание поста'},
        {id: 2, title: 'Javascript 2', body: 'Описание поста 2'},
        {id: 3, title: 'Javascript 3', body: 'Описание поста 3'},
      ],
<<<<<<< HEAD
      title: '',
      body: ''
    }
  },
  methods: {
    createPost(){
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      }
      this.posts.push(newPost);
      this.title = '';
      this.body = '';
    },
=======
    }
  },
  methods: {
    createPost(post){
      this.posts.push(post);
    },
    removePost(post){
      this.posts= this.posts.filter(p => p.id !== post.id);
    }
>>>>>>> 38431b2 (add components and library for global export of components)
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app{
  padding: 20px;
}
</style>
