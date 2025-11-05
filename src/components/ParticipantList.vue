<script setup>
import { ref } from "vue";
// 1. ประกาศตัวแปร name มีค่าเริ่มต้นเป็น ""
const name = ref("")
// 2. ประกาศตัวแปร participants เป็น Array เปล่าสำหรับเก็บค่า input name
const participants = ref([])
// 3. สร้างฟังก์ชันสำหรับเพิ่ม name เข้า participants ตอนที่กดปุ่ม
const addParticipant = () => {
  // เริ่มเขียนโค้ดตรงนี้
  // ตรวจสอบว่ามีชื่อหรือไม่ และชื่อไม่ใช่ string เปล่า
  if (name.value.trim() !== "") {
    // เพิ่มชื่อเข้าไปใน participants
    participants.value.push(name.value.trim());
    // เคลียร์ค่า input หลังจากเพิ่มแล้ว
    name.value = "";
  }
};
</script>

export default
<template>
  <div class="assignment-container">
    <h2>รายชื่อผู้เข้าร่วมกิจกรรม</h2>
    <!-- 4. ใช้ v-model เพื่อเก็บค่า input -->
    <input 
    v-model="name" 
    placeholder="กรอกชื่อผู้เข้าร่วม"
    @keyup.enter="addParticipant"
     />
    <!-- 5. ใช้ @click เพื่อเรียกใช้ addParticipant ตอนกดปุ่ม -->
    <button @click="addParticipant">เพิ่มชื่อ</button>

    <div class="participant-list">
      <!-- 6. เขียน v-if เพื่อแสดงข้อความ "ยังไม่มีผู้เข้าร่วม" เมื่อไม่มีสมาชิกใน participants -->
      <p v-if="participants.length === 0">ยังไม่มีผู้เข้าร่วม</p>
      <!-- 7. เขียน v-else เพื่อแสดง <li> ถ้ามีสมาชิกใน participants -->
      <ul v-else>
        <!-- 8. เขียน v-for เพื่อลูปและแสดงรายชื่อทั้งหมดใน participants -->
        <li v-for="(participant, index) in participants" :key="index">
          {{ participant }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.assignment-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  background: white; 
  border: 2px solid #333; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-top: 0;
  margin-bottom: 16px;
  color: #333;
}

button {
  margin-left: 8px;
  padding: 6px 12px;
  background-color: #333; 
  color: white;
  border: 1px solid #333;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}

input {
  color: black;
  background: white;
  border: 1px solid #ccc;
  padding: 6px 12px;
  border-radius: 4px;
}

input:focus {
  outline: none;
  border-color: #333;
}

.participant-list {
  margin-top: 20px;
  color: black;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
  margin: 0;
}

li {
  padding: 8px;
  margin: 4px 0;
  background: white;
  color: black; 
  list-style-position: outside;
}
</style>
