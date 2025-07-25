import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'


export const useAnimeStore = defineStore('anime', () => {
    // bien luu tru tu khoa tim kiem
    const searchQuery = ref('');

    // bien luu tru danh sach anime, nhan vat
    const topAnimeList = ref([]);
    const characters = ref([]);
    //bien co de xem no co tai du lieu hay ko
    const isLoading = ref(false);

    // khai bao chuyen trang
    const currentPage = ref(1);
    const hasNextPage = ref(false);



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

    // tim kiem anime
    const filteredAnime = computed(() => {
        if (!searchQuery.value) {
            return topAnimeList.value
        }

        return topAnimeList.value.filter(anime =>
            anime.title.toUpperCase().includes(searchQuery.value.toUpperCase()))
    })

    // tim kiem nhan vat
    const filterChar = computed(() => {
        if (!searchQuery.value) {
            return characters.value
        }

        return characters.value.filter(character =>
            character.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
    })


    const fetchCharacters = async (query = '', page = 1) => {
        let url = `https://api.jikan.moe/v4/characters?page=${page}`;

        if (query) {
            url = `https://api.jikan.moe/v4/characters?q=${query}&page=${page}`;
        }

        try {
            const reschar = await fetch(url);
            const json = await reschar.json();
            characters.value = json.data;
            hasNextPage.value = json.pagination.has_next_page;
            currentPage.value = page;
        } catch {
            console.error("Lỗi khi fetch nhân vật: ", error);
        }
    }


    // Hàm để chuyển trang
    const changePage = (newPage) => {
        if (newPage > 0) {
            fetchCharacters(searchQuery.value,newPage);
        }
    };

    let debounceTimer = null;

    watch(searchQuery, (newQuery) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            // Khi có tìm kiếm mới, luôn fetch từ trang 1 với query mới
            fetchCharacters(newQuery, 1);
        }, 500); // Debounce 500ms
    });



    return {
        searchQuery,
        isLoading,
        filteredAnime,
        fetchAnime,
        fetchCharacters,
        characters,
        currentPage,
        hasNextPage,
        changePage,
        filteredAnime,
        filterChar,

    };

})

