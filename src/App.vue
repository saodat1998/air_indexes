<template>
  <v-app>
    <!-- <ToolbarWidget /> -->
    <!-- <language-switcher></language-switcher> -->
    <!-- <v-container> -->
    <router-view />
    <!-- </v-container> -->
    <snackbar-message v-model="$store.getters.message" :color="$store.getters.color"></snackbar-message>
  </v-app>
</template>

<script>
// import TopNav from "@/components/navigation/TopNav";
// import ToolbarWidget from "@/components/widget/ToolbarWidget";
import SnackbarMessage from "@/components/snackbar/SnackbarMessage";
// import LanguageSwitcher from "@/components/widget/LanguageSwitcher";

export default {
  name: "app",
  components: {
    SnackbarMessage
    // LanguageSwitcher,
    // ToolbarWidget
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  },
  methods: {},
  mounted() {},
  beforeMount() {
    let self = this;
    let token = window.localStorage.getItem("token");
    if (!token) {
      self.$store.commit("authorized", false);
      if (this.$route.name != "login") self.redirect("login");
    } else if (!self.$store.getters.token) {
      self.$store.commit("token", token);
    }
  }
};
</script>

<style lang="scss">
@import "styles/App.scss";
@media only screen and (max-width: 600px) {
  main {
    padding: 0 !important;
  }
}
</style>
