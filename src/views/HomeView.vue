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

    <!-- --header new anime-- -->
    <div class="swiper-container flex justify-center pt-3 ">
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

    <div class="flex flex-wrap justify-center p-5 gap-4 sm:w-full h-full">
        <div class="container-anime  h-full p-2  sm:w-[250px]" v-for="todo in filteredAnime" :key="todo.mal_id">
            <div class="poster flex flex-col">
                <img :src="todo.images.jpg.large_image_url" :alt="todo.title"
                    @click="route.push({ path: `/todo/${todo?.mal_id}` })" class="cursor-pointer" />
            </div>

            <div class="infor pt-3 cursor-pointer" @click="route.push({ path: `/todo/${todo?.mal_id}` })">
                <h3>{{ todo?.title }}</h3>
            </div>
        </div>
    </div>


</template>


<style>

</style>
