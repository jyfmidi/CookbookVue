<template>
  <div>
    <AppBar />
    <IndexMain />
  </div>
</template>

<script>
import AppBar from "../components/layouts/AppBar.vue";
import IndexMain from "../components/layouts/IndexMain.vue";

export default {
  name: "Index",

  components: {
    AppBar,
    IndexMain,
  },

  data: () => ({}),
};
</script>
