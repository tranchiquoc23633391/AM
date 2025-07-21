<template>
    <div>
        <div class="flex justify-center items-center p-4 gap-4">
            <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1"
                class="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400">
                Trang trước
            </button>
            <span class="text-lg font-semibold">Trang {{ currentPage }}</span>
            <button @click="changePage(currentPage + 1)" :disabled="!hasNextPage"
                class="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400">
                Trang sau
            </button>
        </div>

        <div v-if="isLoading" class="text-center p-10">Đang tải dữ liệu...</div>
        
        <div v-else class="flex flex-wrap justify-center p-5 gap-4 sm:w-full h-full">
            <div class="container-anime h-full p-2 sm:w-[250px]" v-for="character in characters" :key="character.mal_id">
                <div class="poster flex flex-col">
                    <img :src="character.images.jpg.image_url" :alt="character.name"
                        class="cursor-pointer transition-transform duration-200 hover:scale-105" />
                </div>
                <div class="infor pt-3">
                    <h3>{{ character.name }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const characters = ref([]);
const currentPage = ref(1);
const hasNextPage = ref(false); // Theo dõi xem còn trang kế tiếp không
const isLoading = ref(true); // Theo dõi trạng thái tải

// Hàm để lấy dữ liệu nhân vật theo trang
const fetchCharacters = async (page) => {
    isLoading.value = true;
    try {
        // Endpoint để lấy danh sách nhân vật, hỗ trợ phân trang
        const res = await fetch(`https://api.jikan.moe/v4/characters?page=${page}`);
        if (!res.ok) throw new Error("Network response was not ok");
        // Chuyển đổi dữ liệu JSON
        const json = await res.json();
        // Cập nhật danh sách nhân vật
        characters.value = json.data;
        // API trả về thông tin phân trang, ta dùng nó để biết khi nào nên vô hiệu hóa nút "Trang sau"
        hasNextPage.value = json.pagination.has_next_page;
        currentPage.value = page;

    } catch (error) {
        console.error("Failed to fetch characters:", error);
    } finally {
        isLoading.value = false;
    }
};

// Hàm để chuyển trang
const changePage = (newPage) => {
    if (newPage > 0) {
        fetchCharacters(newPage);
    }
};

// Tải trang đầu tiên khi component được mount
onMounted(() => {
    fetchCharacters(currentPage.value);
});
</script>