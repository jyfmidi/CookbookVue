<template>
  <div>
    <HeaderBar />
    <IndexMain />
  </div>
</template>

<script>
import HeaderBar from "../components/HeaderBar.vue";
import IndexMain from "../components/IndexMain.vue";

export default {
  name: "Index",

  components: {
    HeaderBar,
    IndexMain,
  },

  data: () => ({}),
};
</script>
