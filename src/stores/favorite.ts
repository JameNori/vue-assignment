// TODO1: สร้าง store ชื่อ useFavoriteStore
// state:
//   username (string)
//   favorites (array)
// actions:
//   setUsername(name) → เก็บชื่อผู้ใช้
//   addFavorite(course) → เพิ่มคอร์สใน favorites

import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoriteStore = defineStore("favorite", () => {
  // State
  const username = ref("");
  const favorites = ref<any[]>([]); // ระบุ type เป็น any[]
  
  // Actions
  const setUsername = (name: string) => {
    username.value = name;
  };
  
  const addFavorite = (course: any) => {
    favorites.value.push(course);
  };

  // Return statement ต้องอยู่ที่ระดับ store function
  return {
    username,
    favorites,
    setUsername,
    addFavorite,
  };
});
