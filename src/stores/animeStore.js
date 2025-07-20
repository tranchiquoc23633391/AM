import { defineStore } from 'pinia'
import { ref, computed } from 'vue'


export const useAnimeStore = defineStore('anime', () => {
    // bien luu tru tu khoa tim kiem
    const searchQuery = ref('');

    // bien luu tru danh sach anime
    const topAnimeList = ref([]);

    //bien co de xem no co tai du lieu hay ko
    const isLoading = ref(false);


    // GET 

    // loc danh sach khi tim kiem
    const filteredAnime = computed(() => {
        if (!searchQuery.value) {
            return topAnimeList.value
        }

        return topAnimeList.value.filter(anime =>
            anime.title.toUpperCase().includes(searchQuery.value.toUpperCase()))
    })

    //lay danh sach 
    async function fetchAnime() {
        isLoading.value = true;
        try {
            const res = await fetch("https://api.jikan.moe/v4/top/anime");
            const json = await res.json();
            topAnimeList.value = json.data;
        } catch (error) {
            console.error("loi", error);
        } finally {
            isLoading.value = false
        }
    }

    return {
        searchQuery,
        isLoading,
        filteredAnime, // Component sẽ dùng getter này để hiển thị
        fetchAnime
    }

})

