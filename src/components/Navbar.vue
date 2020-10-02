<template>
  <div id="navbar">
    <div class="text-center">
      <h1 class="m-4">{{ title }}</h1>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      title: "Galeria de imagenes",
      text: "Practica de VueJS utilizando una api de Django.",
    };
  },
};
</script>
