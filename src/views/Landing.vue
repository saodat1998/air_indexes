<template>
	<div>
		<Header></Header>
		<Banner id="banner"></Banner>
		<AboutUs id="about"></AboutUs>
		<Services id="services"></Services>
		<Technology id="technology"></Technology>
		<Footer></Footer>
	</div>
</template>
<script>
import Header from "@/components/LandingPage/Header"
import Banner from "@/components/LandingPage/Banner"
import AboutUs from "@/components/LandingPage/AboutUs"
import Services from "@/components/LandingPage/Services"
import Technology from "@/components/LandingPage/Technology"
import Footer from "@/components/LandingPage/Footer"
	export default {
    name: "Landing",
    components: {
        Header, Banner, AboutUs, Services, Technology, Footer
    },
}
</script>