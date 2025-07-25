<template>
    <div>



        <div v-if="isLoading" class="text-center p-10">Đang tải dữ liệu...</div>

        <div v-else class="flex flex-wrap justify-center p-5 gap-4 sm:w-full h-full">
            <div class="container-anime h-full p-2 sm:w-[250px]" v-for="character in characters"
                :key="character.mal_id">
                <div class="poster flex flex-col">
                    <img :src="character.images.jpg.image_url" :alt="character.name"
                        class="cursor-pointer transition-transform duration-200 hover:scale-105" />
                </div>
                <div class="infor pt-3">
                    <h3>{{ character.name }}</h3>
                </div>
            </div>
        </div>

        <div class="flex justify-center items-center p-4 gap-4">
            <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1"
                class="button px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400">
                Trang trước
            </button>
            <span class="text-lg font-semibold">Trang {{ currentPage }}</span>
            <button @click="changePage(currentPage + 1)" :disabled="!hasNextPage"
                class="button px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400">
                Trang sau
            </button>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAnimeStore } from '@/stores/animeStore';
import { storeToRefs } from 'pinia';


//goi animeStore 
const animeStore = useAnimeStore();

const { characters, isLoading, currentPage, hasNextPage } = storeToRefs(animeStore);
const { changePage, fetchCharacters } = animeStore;

onMounted(() => {
    fetchCharacters(animeStore.searchQuery, currentPage.value);
});

</script>

<style scoped>
.button {
    height: 50px;
    width: 150px;
    position: relative;
    background-color: transparent;
    cursor: pointer;
    border: 2px solid #b9b5b5;
    overflow: hidden;
    border-radius: 30px;
    color: #333;
    transition: all 0.5s ease-in-out;
}

.button:hover {
    box-shadow: 1px 1px 30px #252525;
    color: #fff;
    border: none;
}
</style>