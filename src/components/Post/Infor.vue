<template>
  <div class="post-infor">
    <div class="post-infor-container">
      <i class="far fa-comment inforBtn"></i>
      <i class="fas fa-external-link-alt inforBtn"></i>
      <span class="post-infor-pages"></span>
      <i class="far fa-bookmark inforBtn"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style scoped>
.infor {
  height: 40px;
  /* background-color: aquamarine; */
}

.infor-container {
  display: flex;
  position: relative;
  padding-left: 2%;
  padding-right: 2%;
}

.infor-pages {
  flex-grow: 1;
}

.inforBtn {
  width: 38px;
  height: 38px;
  font-size: 24px;
  text-align: center;
  line-height: 40px;
}
</style>