<script setup>
    defineProps({
        title: String,
        options: [String],
    });
</script>

<template>
    <div>
        <select :name="title" id="dropdown">
            <option value="" disabled selected>{{ title }}:</option>
            <option v-for="option in options" :key="option" :value="option">
                {{ option }}
            </option>
        </select>
    </div>
</template>

<style scoped>
    #dropdown {
        min-width: 120px;
        padding: 0.75rem 1rem;
        background-color: var(--card-background);
        color: var(--text-primary);
        font-weight: 500;
        font-size: 14px;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        cursor: pointer;
        appearance: none;
        box-shadow: var(--shadow);
    }

    #dropdown:hover {
        border-color: var(--primary-color);
        box-shadow: var(--shadow-hover);
    }

    #dropdown option {
        background-color: var(--card-background);
        color: var(--text-primary);
        padding: 0.5rem;
    }
</style>
