<template>
    <button class="btn">
<slot></slot>
    </button>
</template>

<script>
    export default {
    name: 'my-button'    
    }
</script>

<style scoped>
.btn{
  padding: 10px 15px;
  color: teal;
  background: none;
  border: 1px solid teal;
  transition: all 0.3s ease-out;
}
.btn:hover{
  background-color: teal;  
  color: white;
  border-radius: 15px;
  transition: all 0.3s ease-out;
}
</style>