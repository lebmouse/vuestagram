<template>
  <div class="post-comment">
    <div class="post-comment-like">
      <span class="post-comment-likeProfile">
        <img class="post-comment-likeImg" :src="post.infor.img" alt>
      </span>
      <span class="post-comment-likeNumber">{{post.infor.name}}님 외 {{post.infor.number}}명이 좋아합니다.</span>
    </div>
    <div class="post-comment-list">
      <div class="post-comment-item" v-for="(comment, index) in post.comments" :key="index">
        <span class="post-comment-itemName" v-text="comment.name"></span>
        <span class="post-comment-itemContent" v-text="comment.content"></span>
        <span class="post-comment-itemLike">
          <i class="far fa-heart commentBtn"></i>
        </span>
      </div>
    </div>
    <div class="post-comment-date" v-text="post.date"></div>
  </div>
</template>

<script>
export default {
  props:['post']
};
</script>

<style scoped>
.post-comment {
  height: 100px;
  font-size: 16px;
  padding: 0px 10px;
}

.post-comment-like {
  display: flex;
  align-items: center;
}

.post-comment-likeImg {
  width: 20px;
  border-radius: 100%;
}

.post-comment-likeNumber {
  padding-left: 6px;
}

.post-comment-list {
  padding-top: 5px;
}

.post-comment-item {
  position: relative;
}

.post-comment-itemName {
  font-weight: 500;
}

.post-comment-itemLike {
  position: absolute;
  right: 0px;
}

.commentBtn {
  font-size: 100%;
}

.post-comment-date {
  color: #999;
  font-size: 10px;
}
</style>