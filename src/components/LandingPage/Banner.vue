<template>
	<div class="banner">
		<v-container>
			<v-row align="center" class="main">
				<v-col align="center" class="main-text">
				<h1 class="my-10 display-3 font-weight-bold">Welcome to Air Indexer</h1>
				<p class="my-10 display-1">Lorem ipsum dolor sit amet AIR INDEXER VALUES</p>
				<v-btn rounded class="ma-2 started">Get started</v-btn>
				<v-btn rounded class="mx-2 started">Learn more</v-btn>
			</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script>
	export default {
		name: 'Banner',
	}
</script>
<style scoped>
h1 {
	z-index: 10000;
}
p{
	z-index: 10000;
}
	.banner:before {
		filter: brightness(0.5);
	}
	.banner {
		background-image: url('~@/assets/banner-01.jpg');
		-webkit-background-size: cover;
		background-size: cover;
		background-position: center;
		color: white;
		height: 100%;
		width: 100%;
		position: relative;
		background-repeat: no-repeat;
		padding: 100px 0;
	}
	.banner:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000;
    z-index: 0;
    opacity: .6;
}
	.main {
		margin: 82px;
	}
	.banner:before{
		filter: brightness(0.5);
	}
	.text-center {
		text-align: center;
	}
	.started:hover{
	display: inline-block;
	vertical-align: middle;
	-webkit-transform: perspective(1px) translateZ(0);
	transform: perspective(1px) translateZ(0);
	box-shadow: 0 0 1px rgba(0, 0, 0, 0);
	position: relative;
	-webkit-transition-property: color;
	transition-property: color;
	-webkit-transition-duration: 0.5s;
	transition-duration: 0.5s; 
	}
	.started::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #2098D1;
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}
.started:hover::before, .started:focus::before, .started:active::before {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
    transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
}
h1 {
	color: white;
	font-weight: 700;
}
.cd-words-wrapper {
  display: inline-block;
  position: relative;
  text-align: left;
}
.main-text{
	z-index: 2;
}
</style>