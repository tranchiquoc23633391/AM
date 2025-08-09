<script setup>

</script>

<template>
    <div class="flex justify-center items-center h-screen p-5">
        <div class="box-login  h-[500px] w-[1000px] flex ">

            <div class="left  h-full w-[500px]">
                <h2 class="flex items-center justify-center p-10">Login Your Account</h2>

                <div class="flex flex-col items-center gap-2">
                    <input type="text" placeholder="email" class="input-cs w-[400px] p-2" v-model="email"></input>
                    <input type="text" placeholder="Password" class="input-cs w-[400px] p-2" v-model="password"></input>
                </div>

                <div class="remember flex items-center justify-between">

                    <div class="flex items-center justify-center">
                        <input type="checkbox" id="rememberMe" class="mr-2" />
                        <label for="rememberMe" class="text-white pl-2">Remember me</label>
                    </div>

                    <div class="forgot-password">
                        <a href="#">Forgot password?</a>
                    </div>


                </div>


                <div class="btn flex justify-between">
                    <button type="button" class="button" @click="emailLogin">Login</button>
                    <button type="button" class="button">Register</button>
                </div>


            </div>

            <div class="right bg-amber-50 h-full w-[200px] sm:w-[500px] flex items-center justify-center">
                <img src="../img/shiggy.webp" alt="meomeo" class="sm:w-[200px] w-[200px] animate__animated animate__bounce"/>
            </div>


        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const emailLogin = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Successfully logged in!", data);
            router.push("/");
        })
        .catch((error) => {
            console.error("Error:", error);
            alert(error.message);
        });
};
</script>

<style>
.box-login {
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6);
}

.left h2 {
    font-size: 20px;
    font-weight: 500;
}

.input-cs {
    box-shadow: 1px 1px 30px #625e5e;
    color: #fff;
    border: none;
    border-radius: 10px;
    height: 50px;
}

.remember {
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 20px;
}

.btn{
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 20px;
}

.button {
    height: 50px;
    width: 190px;
    background-color: transparent;
    cursor: pointer;
    border: 2px solid #b9b5b5;
    overflow: hidden;
    border-radius: 30px;
    color: #fffbfb;
    transition: all 0.5s ease-in-out;
}

.button:hover {
    box-shadow: 1px 1px 30px #94df52;
    color: #fff;
    border: none;
}

@media screen and (max-width: 640px){
    .right{
        display: none;
    }
}

</style>

