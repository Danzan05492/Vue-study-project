<template>
<div class="app">
  <h1>Страница с постами</h1>
    <my-input
    v-model="searchQuery"
    placeholder="Поиск..."
    >
    </my-input>
  <div class="app__btns">
    <my-button
      @click="showDialog"
    >
      Создать пост
    </my-button>
    <my-select
    v-model="selectedSort"
    :options="sortOptions"
    >
    </my-select>
  </div>
  <my-dialog v-model:show="dialogVisible">
    <post-form
      @create="createPost"
    />
  </my-dialog>
    <post-list
      :posts="sortedAndSearchedPost"
      @remove="removePost"
      v-if="!isPostLoading"
   />
   <div v-else>Идет Загрузка...</div>
   <div class="page__wrapper">
    <div
    v-for="pageNumber in totalPages" 
    :key="pageNumber"
    class="page"
    :class="{
      'current-page': page === pageNumber
    }"
    @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
   </div>
</div>
</template>

<script>
import PostForm from "./components/PostForm.vue"
import PostList from "./components/PostList.vue"
import axios from 'axios';

export default{
  components: {
    PostForm, PostList
  },
  data(){
    return{
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      searchQuery: '',
      selectedSort: '',
      page: 1,
      limit: 10,
      totalages: 0,
      sortOptions:[
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
      ]
    }
  },
  methods: {
    createPost(post){
      if (post.title !="" && post.body !=""){
      this.posts.push(post);
      this.dialogVisible = false;
      }
    },
    removePost(post){
      this.posts= this.posts.filter(p => p.id !== post.id);
    },
    showDialog(){
      this.dialogVisible = true;
    },
    changePage(pageNumber){
      this.page = pageNumber
      this.fetchPosts()
    },
    async fetchPosts(){
      try {
        this.isPostLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts= response.data;
      } 
      catch(e){
        alert('Ошибочка')
      }
      finally{
        this.isPostLoading=false;
      }
    }
  },
  mounted(){
    this.fetchPosts();
  },
  watch:{
    page(){
      this.fetchPosts()
    }
    /**
    selectedSort(newValue){
      this.posts.sort((post1, post2) => {
        return post1[newValue]?.localeCompare(post2[newValue])
      })
    },
    */
  },
  computed:{
    sortedPosts(){
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPost(){
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
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
.app__btns{
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.page__wrapper{
  display: flex;
  margin-top: 15px;
}
.page{
  border: 1px solid black;
  padding: 10 px;
}
.current-page{
  border: 2px solid teal;
}
</style>
