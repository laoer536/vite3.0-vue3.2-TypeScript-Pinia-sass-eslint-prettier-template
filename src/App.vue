<script setup lang="ts">
import { useVcosole } from '@hooks/useVconsole'
import { toggleDark } from '@hooks/useMode'
useVcosole()
</script>

<template>
  <div>
    <div i="ri-sun-line  dark:ri-moon-line" @click="toggleDark()" />
    <router-view />
  </div>
</template>
