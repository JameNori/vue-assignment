<template>
  <div class="page-container">
    <header>
      <h2>📚 Course List</h2>
      <!-- TODO: แสดงจำนวนคอร์สที่ถูกใจจาก store -->
      <p>❤️ ถูกใจแล้ว {{ favoriteCount }} คอร์ส</p>
    </header>

    <div class="form-section">
      <label>ชื่อผู้ใช้:</label>
      <!-- TODO: v-model username -->
      <input v-model="username" placeholder="กรอกชื่อของคุณ" />
    </div>

    <div class="course-list">
      <!-- TODO: Render CourseCard -->
      <CourseCard v-for="course in courses" :key="course.id" :course="course" />
    </div>

    <div style="margin-top: 20px;">
      <RouterLink to="/summary">ไปหน้า Summary</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import CourseCard from "../components/CourseCard.vue";
// TODO: import axios
import axios from "axios";
// TODO: import { useFavoriteStore } จาก "../stores/favorite"
import { useFavoriteStore } from "../stores/favorite";

// ระบุ type ให้ courses
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const courses = ref<Product[]>([]);
// TODO: ดึงข้อมูลจาก API ด้วย axios.get() แล้วเก็บใน courses
// TODO: ใช้ store เพื่อเข้าถึง username และ favorites
const store = useFavoriteStore();
const username = ref(store.username);
const favoriteCount = computed(() => store.favorites.length);
watch(username, (newValue) => {
  store.setUsername(newValue);
});
onMounted(async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    courses.value = response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
  }
});
</script>

<style scoped>
.page-container {
  max-width: 600px;
  margin: auto;
  text-align: center;
}
.course-list {
  margin-top: 24px;
}
</style>
