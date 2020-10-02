<template>
  <div id="addimage">
    <b-button v-b-modal.modal-1><font-awesome-icon :icon="myIcon"/></b-button>

    <b-modal id="modal-1" title="Agrega una Imagen" hide-footer>
      <img :src="image" id="image" alt="tu imagen" />
      <form @submit="onSubmit">
        <b-form-group>
          <b-form-file
            type="file"
            ref="input_img"
            v-model="form.file"
            @change="previewFiles"
            multiple
            tabindex="-1"
            accept="image/jpeg, image/png, image/jpg, image/gif"
          ></b-form-file>
        </b-form-group>
        <b-button type="submit" variant="primary">Subir</b-button>
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
      form: {
        file: "",
      },
      image: "https://via.placeholder.com/150",
    };
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {
    previewFiles(e) {
      const file = e.target.files[0];
      this.image = URL.createObjectURL(file);
    },
    onSubmit(e) {
      e.preventDefault();
      console.log(this.form.file);
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
</style>
