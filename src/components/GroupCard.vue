<script setup>
    defineProps({
        title: String,
        classCode: String,
        dueDate: String,
    });
</script>

<template>
    <div class="container">
        <div class="group-content">
            <h1>{{ title }}</h1>
            <h2>{{ classCode }}</h2>
            <p>{{ dueDate }}</p>
        </div>
    </div>
</template>

<style scoped>
    .container {
        width: 300px;
        padding: 1.5rem 1rem;
        background-color: #e5e5e5;
        align-content: center;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.6);
    }

    .group-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .group-content h1 {
        margin: 0;
        font-size: 28px;
    }

    .group-content h2 {
        margin: 0;
        font-size: 18px;
        font-weight: bold;
    }

    .group-content p {
        margin: 0;
        font-size: 12px;
        font-weight: bold;
    }
</style>
