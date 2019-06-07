<template>
  <div class="contents">
    <div class="contents-container" v-for="(content, index) in post.contents" :key="index">
      <img class="comtentsImg" :src="content.img" alt>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style scoped>
.contents {
  width: 100%;
  /* background-color: bisque; */
}

.comtentsImg {
  width: 100%;
}
</style>