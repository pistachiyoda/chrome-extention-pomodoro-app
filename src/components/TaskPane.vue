<script setup lang="ts">
import { ref } from 'vue'
import type { Task } from '../types'

const isPaneOpen = defineModel('isPaneOpen')
const tasks = defineModel<Task[]>('tasks')
const closeTaskWindow = () => {
  isPaneOpen.value = false
}
const newTaskContent = ref('')
</script>
<template>
  <div class="fixed inset-0 bg-[rgba(0,0,0,0.5)]">
    <div class="fixed right-0 top-0 w-[300px] h-full bg-white z-10">
      <header class="">
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
            @click="closeTaskWindow"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
          <div>タスク一覧</div>
        </div>
      </header>
      <main>
        <ul class="space-y-2">
          <li v-for="task in tasks" :key="task.id" class="flex items-center">
            <input
              type="checkbox"
              v-model="task.isCompleted"
              class="form-checkbox h-5 w-5 text-blue-600"
            />
            <span class="ml-2 text-gray-800" :class="{ 'line-through': task.isCompleted }">
              {{ task.content }}
            </span>
          </li>
        </ul>
        <div class="flex items-center space-x-2">
          <!-- タスク名の入力フィールド -->
          <input
            type="text"
            v-model="newTaskContent"
            placeholder="+ タスクを追加..."
            class="w-full focus:outline-none focus:ring-1 focus:ring-blue-300"
          />
        </div>
      </main>
    </div>
  </div>
</template>
