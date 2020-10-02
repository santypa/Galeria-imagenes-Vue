<template>
  <div id="addimage">
    <b-button v-b-modal.modal-1><font-awesome-icon :icon="myIcon"/></b-button>

    <b-modal id="modal-1" title="BootstrapVue">
      <input
        type="file"
        @change="previewFiles"
        multiple
        tabindex="-1"
        accept="image/jpeg, image/png, image/jpg, image/gif"
      />
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
    };
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {
    previewFiles(event) {
      // process your files, read as DataUrl or upload...
      console.log(event.target.files);
    },
  },
};
</script>

<style scoped></style>
