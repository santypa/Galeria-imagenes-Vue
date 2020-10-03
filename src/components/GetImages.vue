<template>
  <div id="getimages" class="row">
    <b-col cols="4">
      <AddImage></AddImage>
    </b-col>
    <div class="col-4 mt-1 mb-2" v-for="imagen in imagenes" :key="imagen.id">
      <img id="imagenes-api" :src="imagen.url" alt="" />
    </div>
  </div>
</template>

<script>
import AddImage from "../components/AddImage";

export default {
  name: "GetImages",
  components: {
    AddImage,
  },
  data() {
    return {
      imagenes: [],
    };
  },
  mounted() {
    fetch("https://api.jeisontech.dev/api/images/")
      .then((res) => res.json())
      .then((data) => {
        this.imagenes = data;
      });
  },
};
</script>

<style>
#imagenes-api {
  width: 100%;
  height: 300px;
}

#imagenes-api:hover {
  border: 5px solid red;
}
</style>
