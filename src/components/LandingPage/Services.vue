<template>
	<div class="wrapper">
	<v-container>
		<v-row>
		<v-col sm="12" md="12" lg="12" align="center">
			<h1 class="display-2 my-2">Real Benefits with our Air Indexer</h1>
			<p class="title">Our Customers See</p>
		</v-col>
		<v-row>
			<v-col sm="12" md="4" lg="4" xl="4">
				<div class="box">
					<h3 class="title my-3">Temperature</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
				</div>
			</v-col>
			<v-col sm="12" md="4" lg="4" xl="4">
				<div class="box">
					<h3 class="title my-3">Temperature</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
				</div>
			</v-col>
			<v-col sm="12" md="4" lg="4" xl="4">
				<div class="box">
					<h3 class="title my-3">Temperature</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
				</div>
			</v-col>
		</v-row>
		</v-row>
	</v-container>
</div>
</template>
<script>
	export default {
		name: 'Services',
	}
</script>
<style scoped>
.wrapper{
	background-color: #f2f3f5;
}
	.box {
		border-radius: 50px 50px 0 50px;
		/*border: 1px solid grey;*/
		padding: 20px;
		background-color: white;
		margin-bottom: 30px;
		position: relative;
	}
	.box:hover::after {
		width: 100%;
		height: 100%;
		/*background-color: var(--v-primary-base);*/
		color: white;
		transition: all 0.3s ease-in-out 0s;
	}
	.box::after {
		background: #28a9e2;
		width: 0;
		height: 0;
		content: '';
		position: absolute;
		right: 0;
		bottom: 0;
		border-radius: 50px 50px 0 50px;
		transition: all 0.3s ease-in-out 0s;
		z-index: 0;
	}
	.box h3{
		font-weight: 600;
		position: relative;
		z-index: 1;
	}
	.box:hover h3 {
		color: #fff;
		transition: all 0.3s ease-in-out 0s;
	}
	.box p{
		position: relative;
		z-index: 1;
	}
	.box:hover p {
		color: #fff;
		/*transition: all 0.3s ease-in-out 0s;*/
	}
</style>