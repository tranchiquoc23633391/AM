<template>
    <footer class="footer-container text-white h-auto pt-5 ">
        <div class=" flex flex-between items-center justify-between p-5 flex-col sm:flex-row">

            <div class="conent">
                <p class="text-center">© 2025 Qani Website. All rights reserved.</p>
                <p class="text-center">Made by Qani</p>
            </div>


            <div class="about">
                <h2 style="font-weight: 600;">About Qani</h2>
                <p>Qani is a leading provider of web solutions, <br>dedicated to helping businesses establish a strong
                    online presence.</p>
                <p>He like code web and game</p>
            </div>


            <div class="infor flex justify-center pt-5">
                <h2 class="pr-2">Infor Qani:</h2>
                <ul class="flex gap-4 justify-center">
                    <li><a href="https://www.google.com/"><font-awesome-icon :icon="['fab', 'facebook']"
                                class="icon-large cursor-pointer" /></a></li>
                    <li><a href="https://www.google.com/"><font-awesome-icon :icon="['fab', 'twitter']"
                                class="icon-large cursor-pointer" /></a></li>
                    <li><a href="https://www.google.com/"><font-awesome-icon :icon="['fab', 'linkedin']"
                                class="icon-large cursor-pointer" /></a></li>
                    <li><a href="https://www.google.com/"><font-awesome-icon :icon="['fab', 'tiktok']"
                                class="icon-large cursor-pointer" /></a></li>
                </ul>
            </div>




        </div>
    </footer>
</template>


<script setup>
</script>

<style scoped>
.footer-container {
    overflow: hidden;
    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.85);
}


.conent p {
    font-size: 20px;
}

.icon-large {
    font-size: 20px;
}
</style>