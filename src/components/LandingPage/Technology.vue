<template>
    <div class="wrapper">
        <v-container>
            <v-row>
                <v-col sm='12' md="12" lg="12" class="text-center">
                    <h1 class="display-2 my-2">Our Technology</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt</p>
                </v-col>
                <v-col sm="12" md="3" lg="3" v-for="(item, i) in items" :key="i">
                    <div class="postBox">
                        <div class="post-thumb">
                            <v-img :src="item.src">
                            </v-img>
                            <div class="date">
                                <span>Step </span>
                                <span>{{item.step}}</span>
                            </div>
                        </div>
                        <div class="post-info">
                            <h3 class="mt-10 mb-3">{{item.title}}</h3>
                            <p>{{item.text}}</p>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    name: 'Technology',
    data() {
        return {
            items: [
                { src: require('@/assets/blog-01.jpg'), step: '1', title: 'Collector', text: 'Etiam materials ut mollis tellus, vel posuere nulla. Etiam sit amet massa sodales aliquam at eget quam. Integer ultricies et magna quis.' },
                { src: require('@/assets/blog-02.jpg'), step: '2', title: 'Validating', text: 'Etiam materials ut mollis tellus, vel posuere nulla. Etiam sit amet massa sodales aliquam at eget quam. Integer ultricies et magna quis.' },
                { src: require('@/assets/blog-03.jpg'), step: '3', title: 'Modeling', text: 'Etiam materials ut mollis tellus, vel posuere nulla. Etiam sit amet massa sodales aliquam at eget quam. Integer ultricies et magna quis.' },
                { src: require('@/assets/blog-01.jpg'), step: '4', title: 'Result', text: 'Etiam materials ut mollis tellus, vel posuere nulla. Etiam sit amet massa sodales aliquam at eget quam. Integer ultricies et magna quis.' },
            ]
        }
    }
}
</script>
<style scoped>
.wrapper {
    background-color: #f2f3f5;
}

.postBox {
    box-shadow: 0px 5px 35px 0px rgba(148, 146, 245, 0.15);
    background: #fff;
    border-radius: 100px 100px 0 0;
    margin: 5px;
}

.post-thumb {
    position: relative;
    border-radius: 100px 100px 0 100px;
    overflow: hidden;
}

.postBox .post-thumb:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(51, 51, 51, 0.80);
    opacity: 0;
    -webkit-transition: all .5s;
    transition: all .5s;
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
}

.postBox .date {
    display: inline-block;
    position: absolute;
    bottom: 5px;
    right: 5px;
    background-color: #28a9e2;
    color: #fff;
    padding: 10px 15px;
    text-align: center;
}

.post-info {
    padding: 0 15px 40px;
    background: #fff;
    text-align: left;
    margin-top: 40px;
}

.postBox:hover .post-thumb:before {
    opacity: .6;
    -webkit-transform: translateY(0);
    transform: translateY(0);
}
.postBox:hover .post-thumb{
	filter: brightness(0.5);
}
</style>