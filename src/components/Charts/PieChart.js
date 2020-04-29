import { Doughnut, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;
export default {
  extends: Doughnut,
  mixins: [reactiveProp],
  props: ["chartData", "options"],
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, {
      legend: {
        position: "left"
      },
      maintainAspectRatio: false,
      borderWidth: "10px",
      hoverBackgroundColor: "red",
      hoverBorderWidth: "10px"
    });
  }
};
