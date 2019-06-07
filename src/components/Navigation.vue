<template>
  <div class="navigation">
    <div class="nav-container">
      <span class="nav-logo">
        <i class="fab fa-instagram navBtn"></i>
        <span class="verticalLine"></span>
        <img class="logoFont" :src="logoFont" alt>
      </span>
      <span class="nav-group">
        <span class="nav-group-container">
          <span class="nav-explore">
            <i class="far fa-compass navBtn"></i>
          </span>
          <span class="nav-like">
            <i class="far fa-heart navBtn"></i>
          </span>
          <span class="nav-profile">
            <i class="far fa-user navBtn"></i>
          </span>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
import logoFont from "../assets/logo_font.png";
export default {
  data(){
    return{
      logoFont
    }
  }
};
</script>

<style scoped>
.navigation {
  /* height: 52px; */
  background-color: white;
  border-bottom: 1px solid black;
  padding: 25px 20px 15px 20px;
}

.nav-container {
  display: flex;
  position: relative;
  max-width: 1000px;
  margin: auto;
}

.navBtn {
  font-size: 25px;
}

.logoFont {
  height: 35px;
}

.verticalLine {
  width: 1px;
  height: 28px;
  background-color: #262626;
  margin: 0px 16px;
}

.nav-logo {
  display: flex;
  /* background-color: aquamarine; */
  width: 50%;
}

.nav-group-container {
  width: 132px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 0px;
}
</style>