<template>
    <v-footer dark padless>
        <v-card flat tile class="card white--text text-center">
            <v-row>
            <v-col class="text-center" sm="12" md="12" lg="12">
                <v-img class="image" src="@/assets/logo.png" width="120" height="90"></v-img>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <p class="text">All Rights Reserved. © 2018 <a href="#">OnNext</a> Design By: <a href="#">html design</a></p>
                <!--  <v-card-text>
                <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
                    <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
            </v-card-text> -->
                <!-- <v-card-text class="pt-0 white--text">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus.
            </v-card-text> -->
                <!--  <v-divider></v-divider>
            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </v-card-text> -->
            </v-col>
        </v-row>
        </v-card>
    </v-footer>
</template>
<script>
    export default {
        name: 'Footer',
    }
</script>
<style scoped>
.card {
    width: 100%;
    align-items: center;
}
.image {
    margin: 5px auto;
}
    ul{
        list-style: none;
    }
    li {
        display: inline-block;
    }
    li a{
        text-decoration: none;
        font-size: 15px;
        margin: 5px;
        text-transform: uppercase;
        color: #999;
    }
    .text {
        color: #999;
    }
    .text a {
        text-decoration: none;
        color: white;
    }
</style>