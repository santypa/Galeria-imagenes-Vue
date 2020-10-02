<template>
  <div id="app">
    <b-container class="bg-danger">
      <Navbar></Navbar>
      <b-row>
        <AddImage></AddImage>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import AddImage from "./components/AddImage.vue";

export default {
  name: "App",
  components: {
    Navbar,
    AddImage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
