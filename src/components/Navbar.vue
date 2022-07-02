<template>
    <div class="text-dark">
        <div class="collapse" id="navbarToggleExternalContent" app>
        <div class="bg-white p-4">
            <h5 class="text-dark h4">Collapsed content</h5>
            <span class="text-dark ">Toggleable via the navbar brand.</span>
        </div>
        </div>
        <nav class="navbar">
        <div class="container-fluid">
            <button @click="$emit('handeDrawer')" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        </nav>
    </div>
</template>

<script setup>

</script>

<style>

</style>