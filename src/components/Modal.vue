<!-- src/components/Modal.vue -->
<template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 class="text-xl font-semibold mb-4">{{ title }}</h2>
        <slot />
        <button @click="close" class="mt-4 bg-red-500 text-white px-4 py-2 rounded">
          Cerrar
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Modal",
    props: {
      isOpen: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
        default: "Modal Title",
      },
    },
    methods: {
      close() {
        this.$emit("close");
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos adicionales si es necesario */
  </style>
  