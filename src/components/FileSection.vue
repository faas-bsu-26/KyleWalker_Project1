<script setup>
    import Button from './Button.vue';

    defineProps({
        title: String,
        files: {
            type: Array,
            default: () => [],
        },
    });

    const emit = defineEmits(['add']);
</script>

<template>
    <div class="file-section">
        <h3>{{ title }}</h3>
        <div class="files-list">
            <a
                v-for="(file, index) in files"
                :key="index"
                href="#"
                class="file-link"
            >
                {{ file }}
            </a>
        </div>
        <Button msg="+  Edit" class="add-button" />
    </div>
</template>

<style scoped>
    .file-section {
        background-color: var(--card-background);
        border: 1px solid var(--border-color);
        border-radius: 12px;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        box-shadow: var(--shadow);
    }

    h3 {
        margin: 0;
        color: var(--text-primary);
        font-size: 1rem;
        font-weight: 600;
    }

    .files-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .file-link {
        color: var(--primary-color);
        text-decoration: underline;
        font-size: 0.9rem;
    }

    .file-link:hover {
        color: var(--primary-hover);
    }

    .add-button {
        margin-top: auto;
    }
</style>
