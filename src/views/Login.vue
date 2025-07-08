<template>
  <div class="min-h-screen w-full flex items-center justify-center bg-[#F1F8E9] px-4">
    <div class="w-full max-w-xs  p-3 rounded-lg">
      <h2 class="text-4xl text-center mb-2 font-bold">StokWarung</h2>
      <p class="text-center text-[14px] text-[#757575]">Stok lancar, dagangan aman. Login dulu yuk!</p>
      <img :src="ilustrationLogin" alt="ilustration login" class="mt-4">

      <form @submit.prevent="handleLogin">
        <div class="mb-4 mt-2">
          <input
            v-model="email"
            type="email"
            class="w-full border border-gray-300 rounded-full px-6 py-3 text-sm"
            placeholder="Email"
            required
          />
        </div>

        <div class="mb-3">
          <input
            v-model="password"
            type="password"
            class="w-full border border-gray-300 rounded-full px-6 py-3 text-sm"
            placeholder="Password"
            required
          />
        </div>

          <a href="#" class="text-right text-sm w-full  block mb-6">Lupa Password ? </a>

        <button
          type="submit"
          class="w-full bg-[#4CAF50] text-white py-4 rounded-full hover:bg-[#507747] text-sm"
        >
          Login
        </button>
      </form>

      <p class="mt-4 text-center text-xs">
        Belum punya akun?
        <router-link to="/register" class="font-semibold underline">Daftar Sekarang</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import ilustrationLogin from '../assets/sw-ilustration-login.svg'

const email = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = async () => {
  try {
    const auth = getAuth()
    await signInWithEmailAndPassword(auth, email.value, password.value)
    router.push('/dashboard')
  } catch (error) {
    alert('Login gagal: ' + error.message)
  }
}
</script>
