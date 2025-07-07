<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-md p-6 rounded-md w-full max-w-sm">
      <h2 class="text-2xl font-bold mb-4 text-center">Daftar</h2>

      <form @submit.prevent="handleRegister">
        <div class="mb-4">
          <label class="block mb-1">Email</label>
          <input v-model="email" type="email" class="w-full border p-2 rounded" required />
        </div>

        <div class="mb-4">
          <label class="block mb-1">Password</label>
          <input v-model="password" type="password" class="w-full border p-2 rounded" required />
        </div>

        <button type="submit" class="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
          Daftar
        </button>
      </form>

      <p class="text-center mt-4 text-sm">
        Sudah punya akun?
        <router-link to="/login" class="text-blue-500 underline">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '../lib/firebase'

const email = ref('')
const password = ref('')
const router = useRouter()

const handleRegister = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value)
    router.push('/dashboard')
  } catch (error) {
    alert('Registrasi gagal: ' + error.message)
  }
}
</script>
