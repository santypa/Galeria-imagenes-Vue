<template>
  <div id="home">
    <b-container>
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
