<template>
  <div id="home">
    <b-container class="bg-danger">
      <Navbar></Navbar>
      <GetImages></GetImages>
    </b-container>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import GetImages from "../components/GetImages";

export default {
  name: "Home",
  components: {
    Navbar,
    GetImages,
  },
};
</script>

<style>
#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
