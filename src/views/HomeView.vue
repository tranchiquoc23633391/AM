<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAnimeStore } from '../stores/animeStore.js'
import { storeToRefs } from 'pinia';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/vue';
import 'swiper/css';


const route = useRouter();
const animeStore = useAnimeStore();

const { filteredAnime, isLoading } = storeToRefs(animeStore);

const dataAnimeNew = ref([]);

// Chỉ cần một onMounted
onMounted(async () => {
    // Gọi action từ store để lấy dữ liệu top anime
    animeStore.fetchAnime(); 

    // Lấy dữ liệu cho Swiper (có thể gộp vào store nếu muốn)
    const res = await fetch("https://api.jikan.moe/v4/seasons/now?sfw");
    const json = await res.json();
    dataAnimeNew.value = json.data;
});


</script>

<template>

    <div class="p-5">
        <h1>new anime</h1>
    </div>
    <!-- --header new anime-- -->
    <div class="swiper-container flex justify-center pt-5">
        <Swiper :slides-per-view="3" :space-between="20" :loop="true"
            :autoplay="{ delay: 3000, disableOnInteraction: false }" :grabCursor="true" :centeredSlides="true"
            :breakpoints="{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            }" class="newInformationAnime">
            <SwiperSlide v-for="(todo, index) in dataAnimeNew" :key="index" class="Swiper-img">
                <img :src="todo.images.jpg.large_image_url" :alt="todo.title" />
            </SwiperSlide>
        </Swiper>
    </div>

    <div class="flex flex-wrap justify-center gap-10 pb-10" >
        <div class="container" v-for="todo in filteredAnime" :key="todo.mal_id">
            <div class="cellphone-container animate__animated animate__fadeIn">
                <div class="movie">
                    <div class="movie-img">
                        <img :src="todo.images.jpg.large_image_url" :alt="todo.title" />
                    </div>

                    <div class="text-movie-cont">
                        <div class="mr-grid">
                            <div class="col1 cursor-pointer" @click="route.push({ path: `/todo/${todo?.mal_id}` })">
                                <h1>{{ todo?.title }}</h1>
                                <ul class="movie-gen">
                                    <li>PG-13 /</li>

                                    <li v-if="todo.genres">
                                        <!-- {{todo?.genres.map(genre => genre.name).join(', ')}} -->
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style >
/* Fonts Import */
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800,300italic,400italic,600italic,700italic,800italic');

body {
    background: linear-gradient(rgba(30, 27, 38, 0.95),
            rgba(30, 27, 38, 0.95)),
        url("https://images8.alphacoders.com/113/1137852.png");
    background-position: center;
    background-size: cover;
    background-repeat: repeat;
}



.container {
    width: 230px;
    height: auto;

}

.cellphone-container {
    width: 250px;
    height: 400px;
    background-color: #1e1b26;
    box-shadow: 5px 5px 115px -14px black;
    border-radius: 4px;
}


.movie {
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 38%, rgba(255, 255, 255, 0.06) 39%, rgba(30, 27, 38, 0.88) 53%, rgba(30, 27, 38, 1) 55%);
    background-size: cover;
    z-index: 1 !important;
    width: 250px;
    height: 450px;
    display: block;
    border-radius: 4px;
}

.menu {
    position: absolute;
    right: 12px;
    top: 6px;
    z-index: 999;
}

.menu i {
    font-size: 40px;
    color: #fe4141;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5));
}



.movie-img {
    width: 100%;
    height: 350px;
    background-position: center;
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 111 !important;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    -webkit-mask-image: -webkit-gradient(linear, left top, left bottom,
            color-stop(0.00, rgba(0, 0, 0, 1)),
            color-stop(0.35, rgba(0, 0, 0, 1)),
            color-stop(0.50, rgba(0, 0, 0, 1)),
            color-stop(0.65, rgba(0, 0, 0, 1)),
            color-stop(0.85, rgba(0, 0, 0, 0.6)),
            color-stop(1.00, rgba(0, 0, 0, 0)));
    position: relative;
}

.movie-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}



.text-movie-cont {
    padding: 0 12px;
    text-align: justify;
}

.action-btn {
    text-align: right;
}

.action-btn i {
    color: #fe4141;
    font-size: 28px;
    text-align: right;
}

.watch-btn {
    display: block;
    border: 1px solid #fe4141;
    border-radius: 5px;
    padding: 4px;
    width: 140px;

}

.watch-btn h3 i {
    font-size: 14px;
    margin-right: 2px;
    position: relative;
    float: left;
    line-height: 1;
}

.action-row {
    margin-top: 24px;
}

.summary-row {
    margin-top: 12px;
}

/* TYPOGRAPHY */

h1,
h2,
h3,
h4,
h5 {
    font-family: 'Montserrat', sans-serif;
    color: #e7e7e7;
    margin: 0;

}

h1 {
    font-size: 20px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

h3 {
    font-size: 14px;
    font-weight: 400;
    color: #fe4141;
}

h5 {
    font-size: 12px;
    font-weight: 400;
}

.movie-gen {
    margin: 0;
    padding: 0;

}



.movie-gen li {
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    color: #a0a0a0;
    /* tương tự darken #e7e7e7 40% */
    width: auto;
    display: block;
    float: left;
    margin-right: 6px;
    font-weight: 600;

}

.movie-likes {
    float: right;
    margin: 0;
    padding: 0;
}

.movie-likes li {
    color: #fe4141;
}

.movie-likes li:last-child {
    margin-right: 0;
}

.movie-likes i {
    font-size: 14px;
    margin-right: 4px;
    position: relative;
    float: left;
    line-height: 1;
}

.movie-details {
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    font-weight: 300;
    color: #bfbfbf;
    /* darken #e7e7e7 20% */
    margin: 0;
}



.movie-actors {
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    font-weight: 300;
    color: #e7e7e7;
    font-style: italic;
    margin: 0;
}

/* GRID */

.thegrid {
    margin: 0 auto;
}

.elements-distance {
    margin: 0;
}

.mr-grid {
    width: 100%;
}

.mr-grid:before,
.mr-grid:after {
    content: "";
    display: table;
}

.mr-grid:after {
    clear: both;
}

.mr-grid {
    zoom: 1;
}

.col1,
.col2,
.col3,
.col3rest,
.col4,
.col4rest,
.col5,
.col5rest,
.col6,
.col6rest {
    margin: 0 0.5% 0.5% 0.5%;
    padding: 1%;
    float: left;
    display: block;
}

.col1 {
    width: 98%;
}

.col2 {
    width: 47%;
}

.col3 {
    width: 30.3333333333%;
}

.col4 {
    width: 22%;
}

.col5 {
    width: 17%;
}

.col6 {
    width: 13.6666666667%;
}

.col3rest {
    width: 63.6666666667%;
}

.col4rest {
    width: 72%;
}

.col5rest {
    width: 77%;
}

.col6rest {
    width: 80.3333333333%;
}

.dribbble-link {
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 15px;
    right: 15px;
    border-radius: 50px;
}


.swiper-container{
  width: auto;
  padding-bottom: 50px;
}

.Swiper-img img{
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;

}


</style>
