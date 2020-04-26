<template>
  <v-container>
    <v-card class="pa-5 ma-3 elevation-5">
      <v-form>
        <h3 class>Choose Region</h3>
        <v-select :items="items" label="Regions" solo rounded filled outlined></v-select>
        <h3 class>Today's values</h3>
        <v-row justify="center">
          <v-col cols="12" md="6" v-for="item in fields" :key="item.name">
            <v-text-field v-model="item.value" :label="item.label" required filled rounded outlined></v-text-field>
          </v-col>
        </v-row>
        <v-btn rounded color="primary" block large class="subtitle-1">Submit</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Technician",

  components: {},
  data() {
    return {
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      fields: [
        { name: "ozone", value: "", label: "Ozone O(3)" },
        { name: "pm25", value: "", label: "Particulates PM(2.5)" },
        { name: "pm10", value: "", label: "Particulates PM(10)" },
        { name: "co", value: "", label: "Carbon Manoxide CO" },
        { name: "so", value: "", label: "Sulfur Dioxide SO(2)" },
        { name: "no", value: "", label: "Nitrogen Dioxide NO(2)" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
</style>
