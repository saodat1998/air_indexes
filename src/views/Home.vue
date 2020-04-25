<template>
  <Info></Info>
</template>

<script>
import Info from "@/components/HomeViews/Info";
export default {
  name: "Home",

  components: {
    Info,
  },
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>

</style>
