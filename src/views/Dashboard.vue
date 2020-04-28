<template>
  <div class="container">
    <bar-chart v-if="!isLoading" :chartData="chartdata" />
  </div>
</template>

<script>
import BarChart from "@/components/App/BarChart";

export default {
  name: "Dashboard",
  components: { BarChart },
  data: () => ({
    isLoading: false,
    chartdata: null
  }),
  methods: {
    getValues() {
      let self = this;
      self.isLoading = true;
      self.$http.get(`dates/statistics?region_id=5`).then(response => {
        self.chartdata = response.data.data;
        self.isLoading = false;
      });
    }
  },
  mounted() {
    this.getValues();
  }
};
</script>