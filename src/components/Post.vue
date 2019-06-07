<template>
  <div class="post">
    <post-head :post="post"></post-head>
    <post-content :post="post"></post-content>
    <post-infor :post="post"></post-infor>
    <post-comment :post="post"></post-comment>
  </div>
</template>

<script>
import Head from "./Post/Head.vue";
import Content from "./Post/Content.vue";
import Infor from "./Post/Infor";
import Comment from "./Post/Comment";
export default {
  props: ["post"],
  components: {
    "post-head": Head,
    "post-content": Content,
    "post-infor": Infor,
    "post-comment": Comment
  }
};
</script>

<style scoped>
.post {
  max-width: 600px;
  margin: auto;
}
</style> 