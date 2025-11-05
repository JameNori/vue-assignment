<template>
  <div class="page-container">
    <h2>📋 Summary</h2>
    <!-- TODO: ดึง username และ favorites.length จาก store -->
    <div v-if="hasData">
      <p>ชื่อผู้ใช้: {{ username }}</p>
      <p>จำนวนคอร์สที่ถูกใจ: {{ favoriteCount }}</p>
    </div>
    
    <div v-else>
      <p>ยังไม่มีข้อมูลการเลือกคอร์ส</p>
    </div>

    <div style="margin-top: 20px;">
      <RouterLink to="/">กลับไปหน้า Course</RouterLink>
    </div>
  </div>
</template>

<script setup>
// TODO: import { useFavoriteStore }
import { computed } from "vue";
import { useFavoriteStore } from "../stores/favorite";

const store = useFavoriteStore();
const username = computed(() => store.username);
const favoriteCount = computed(() => store.favorites.length);
const hasData = computed(() => 
  username.value.trim() !== "" && favoriteCount.value > 0
);
</script>

<style scoped>
.page-container {
  text-align: center;
  padding: 40px;
}
</style>
