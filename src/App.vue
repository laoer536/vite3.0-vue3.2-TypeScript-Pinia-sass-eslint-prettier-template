<script setup lang="ts">
import { useVcosole } from './hooks/useVconsole'
useVcosole()
</script>

<template>
  <div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped></style>
