<template>
  <div>
    <Header></Header>
    <Banner id="banner"></Banner>
    <sLine class="mx-10"/>
    <Ranking id="ranking"></Ranking>
    <Services id="services"></Services>
    <AboutUs id="about"></AboutUs>
    <Pie />
    <!-- <Technology id="technology"></Technology> -->
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/LandingPage/Header";
import Pie from "@/components/Charts/Pie";
import sLine from "@/components/Charts/sLine";
import Banner from "@/components/LandingPage/Banner";
import Ranking from "@/components/LandingPage/Ranking";
import AboutUs from "@/components/LandingPage/AboutUs";
import Services from "@/components/LandingPage/Services";
// import Technology from "@/components/LandingPage/Technology"
import Footer from "@/components/LandingPage/Footer";
export default {
  name: "Landing",
  components: {
    Header,
    Banner,
    AboutUs,
    Services,
    Footer,
    Pie,
    Ranking,
    sLine
  }
};
</script>