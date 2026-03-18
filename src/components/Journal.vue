<script setup>
    import { ref } from 'vue';

    defineProps({
        entries: {
            type: Array,
            default: () => [],
        },
    });

    const journalText = ref('');
</script>

<template>
    <div class="journal">
        <h3>Journal</h3>
        <textarea
            v-model="journalText"
            placeholder="Write your journal entry here..."
            class="journal-textarea"
        ></textarea>
    </div>
</template>

<style scoped>
    .journal {
        width: 100%;
        background-color: var(--card-background);
        border: 1px solid var(--border-color);
        border-radius: 12px;
        padding: 1.5rem;
        box-shadow: var(--shadow);
        display: flex;
        flex-direction: column;
    }

    h3 {
        margin: 0 0 1rem 0;
        color: var(--text-primary);
        font-size: 1rem;
        font-weight: 600;
    }

    .journal-textarea {
        flex: 1;
        min-height: 200px;
        padding: 1rem;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        background-color: white;
        color: var(--text-primary);
        font-family: inherit;
        font-size: 0.95rem;
        line-height: 1.6;
        resize: vertical;
    }

    .journal-textarea::placeholder {
        color: var(--text-secondary);
    }

    .journal-textarea:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }
</style>
