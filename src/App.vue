<script setup lang="ts">
import { useVcosole } from '@/hooks/useVconsole.ts'
useVcosole()
</script>

<template>
  <div class="root">
    <router-view />
  </div>
</template>

<style lang="scss">
.root {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
