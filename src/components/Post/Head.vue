<template>
  <div class="head">
    <div class="head-container">
      <div class="head-profile">
        <img class="head-profileImg" :src="post.head.img" alt>
      </div>
      <div class="head-name">{{ post.head.name }}</div>
      <div class="head-btn">...</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.head {
  height: 60px;
  /* background-color: aquamarine; */
}

.head-container {
  display: flex;
  position: relative;
  padding: 16px;
}

.head-profile {
  width: 32px;
  height: 32px;
}

.head-profileImg {
  width: 100%;
  border-radius: 100%;
}

.head-name {
  padding-left: 5px;
  flex-grow: 1;
}
</style>