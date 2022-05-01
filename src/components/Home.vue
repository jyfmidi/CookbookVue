<template>
  <div>
    <HeaderBar />
    <WelcomeMain />
  </div>
</template>

<script>
import HeaderBar from "./HeaderBar.vue";
import WelcomeMain from "./WelcomeMain.vue";

export default {
  name: "HelloWorld",

  components: {
    HeaderBar,
    WelcomeMain,
  },

  data: () => ({}),
};
</script>
