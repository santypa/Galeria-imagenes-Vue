<template>
  <div id="addimage">
    <a v-b-modal.modal-1 class="icon"><font-awesome-icon :icon="myIcon"/></a>
    <b-modal id="modal-1" title="Agrega una Imagen" hide-footer>
      <img :src="image" id="image" alt="tu imagen" />
      <form>
        <b-form-group>
          <b-form-file
            type="file"
            v-model="file"
            @change="previewFiles"
            accept="image/jpeg, image/png, image/jpg, image/gif"
          ></b-form-file>
        </b-form-group>
        <b-button
          type="submit"
          class="btn-subir"
          @click="onSubir"
          variant="primary"
          >Subir</b-button
        >
        <b-button type="submit" @change="onSubir" variant="success"
          >Mostrar imagenes</b-button
        >
      </form>
    </b-modal>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "AddImage",
  data() {
    return {
      myIcon: faPlus,
      fileImage: null,
      image: "https://via.placeholder.com/150",
    };
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {
    previewFiles(e) {
      this.image = URL.createObjectURL(e.target.files[0]);
      this.fileImage = e.target.files[0];
    },
    onSubir(e) {
      e.preventDefault();
      const fd = new FormData();
      fd.append("url", this.fileImage, this.fileImage.name);
      fetch("https://api.jeisontech.dev/api/images/", {
        method: "POST",
        mode: "no-cors",
        headers: { "Access-Control-Allow-Origin": "*" },
        body: fd,
      })
        .then((res) => {
          console.log(res);
          this.$swal(
            "Se agrego una imagen",
            "La imagen se agrego correctamente",
            "success"
          );
        })
        .catch((error) => {
          console.log(error);
          this.$swal(
            "No se agrego tu imagen",
            "hubo un error al intentar guardar tu imagen",
            "error"
          );
        });
    },
  },
};
</script>

<style>
#image {
  margin-bottom: 1em;
  width: 100%;
  height: 300px;
}

.icon {
  color: #ccc;
  font-size: 4.5em;
}

.icon:hover {
  color: #212429;
}
.btn-subir {
  margin-right: 1em;
}
</style>
