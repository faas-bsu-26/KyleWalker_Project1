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
        width: 100%;
        padding: 1.5rem 1rem;
        background-color: var(--card-background);
        border-radius: 12px;
        display: flex;
        justify-content: center;
        box-shadow: var(--shadow);
        transition:
            box-shadow 0.3s ease,
            transform 0.3s ease;
        border: 1px solid var(--border-color);
        cursor: pointer;
    }

    .container:hover {
        box-shadow: var(--shadow-hover);
        transform: translateY(-2px);
    }

    .group-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        text-align: center;
    }

    .group-content h1 {
        margin: 0;
        font-size: 20px;
        font-weight: 600;
        color: var(--text-primary);
    }

    .group-content h2 {
        margin: 0;
        font-size: 14px;
        font-weight: 500;
        color: var(--text-secondary);
    }

    .group-content p {
        margin: 0;
        font-size: 12px;
        font-weight: 400;
        color: var(--text-secondary);
    }
</style>
