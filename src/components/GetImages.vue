<template>
  <div id="getimages" class="row">
    <!-- <b-modal id="getimages" title="Agrega una Imagen" hide-footer> </b-modal> -->
    <b-col
      sm="12"
      md="6"
      lg="4"
      class="d-flex justify-content-center align-items-center"
    >
      <AddImage></AddImage>
    </b-col>
    <div
      class="col-12 col-md-6 col-lg-4 mt-1 mb-2"
      v-for="imagen in order(imagenes)"
      :key="imagen.id"
    >
      <!-- <a v-b-modal.getimages> -->
      <img id="imagenes-api" :src="imagen.url" alt="" />
      <!-- </a> -->
    </div>

    <!-- Using value -->
    <!-- Element to collapse -->
    <b-container>
      <b-row class="mt-3">
        <b-col sm="12" md="4" offset-md="4" lg="4">
          <b-button v-b-toggle.collapse-a class="btn-block">Ver mas</b-button>
        </b-col>
        <b-collapse
          id="collapse-a"
          class="mt-2 col-12 col-md-6 col-lg-4 mb-2"
          v-for="imagen in orderMax(imagenes)"
          :key="imagen.id"
        >
          <!-- <a v-b-modal.getimages> -->
          <img id="imagenes-api" :src="imagen.url" alt="" />
          <!-- </a> -->
        </b-collapse>
      </b-row>
    </b-container>
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
  methods: {
    order(imagenes) {
      const imagenReverse = imagenes.reverse();
      const imagen = imagenReverse.slice(0, 5);
      return imagen;
    },
    orderMax(imagenes) {
      const imagen = imagenes.slice(6);
      return imagen;
    },
  },
};
</script>

<style>
#imagenes-api {
  width: 100%;
  height: 200px;
}

#imagenes-api:hover {
  border: 5px solid #eee;
}

.btn-secondary {
  background: #3fb27f !important;
  border-color: #3fb27f !important;
  margin-bottom: 2em;
}
</style>
