<script setup>
import { ref } from 'vue';

defineProps({
    isOpen: Boolean,
});

const emit = defineEmits(['close']);

const selectedColor = ref('#2563eb');

const colors = [
    '#6b7280',
    '#94a3b8',
    '#78716c',
    '#a16207',
    '#7c3aed',
    '#2563eb',
    '#06b6d4',
    '#10b981',
    '#f59e0b',
    '#ef4444',
];
</script>

<template>
    <div v-if="isOpen" class="modal-overlay" @click="emit('close')">
        <div class="modal-content" @click.stop>
            <h2>Create Course</h2>
            <form>
                <div class="form-group">
                    <label>Class Name:</label>
                    <input
                        type="text"
                        placeholder="ex. Intro To Computer Science"
                    />
                </div>

                <div class="form-group">
                    <label>Class Code:</label>
                    <input
                        type="text"
                        placeholder="ex. CS 221"
                    />
                </div>

                <div class="form-group">
                    <label>Meeting Days:</label>
                    <input
                        type="text"
                        placeholder="ex. Monday, Wednesday, Friday"
                    />
                </div>

                <div class="form-group">
                    <label>Meeting Times:</label>
                    <input
                        type="text"
                        placeholder="ex. 10:00 AM - 10:50 AM"
                    />
                </div>

                <div class="form-group">
                    <label>Color Select:</label>
                    <div class="color-selector">
                        <button
                            v-for="color in colors"
                            :key="color"
                            type="button"
                            class="color-option"
                            :style="{ backgroundColor: color }"
                            :class="{ selected: selectedColor === color }"
                            @click="selectedColor = color"
                        />
                    </div>
                </div>

                <div class="form-actions">
                    <button type="button" class="btn-cancel" @click="emit('close')">
                        Cancel
                    </button>
                    <button type="button" class="btn-save" @click="emit('close')">
                        Save
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    background-color: var(--card-background);
    border-radius: 12px;
    padding: 1.5rem;
    max-width: 550px;
    width: 90%;
    box-shadow: var(--shadow-hover);
}

h2 {
    margin: 0 0 1rem 0;
    color: var(--text-primary);
    font-size: 1.25rem;
    font-weight: 600;
}

form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

label {
    font-weight: 600;
    color: var(--text-primary);
    font-size: 0.95rem;
}

input[type='text'] {
    padding: 0.75rem;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-family: inherit;
    font-size: 0.95rem;
    color: var(--text-primary);
    background-color: var(--background-color);
}

input[type='text']:focus {
    outline: none;
    border-color: var(--primary-color);
}

input::placeholder {
    color: var(--text-secondary);
}

.color-selector {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 0.5rem;
}

.color-option {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 2px solid transparent;
    cursor: pointer;
}

.color-option.selected {
    border-color: var(--text-primary);
    box-shadow: 0 0 0 2px var(--card-background);
}

.form-actions {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
}

.btn-cancel,
.btn-save {
    flex: 1;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
}

.btn-cancel {
    background-color: var(--border-color);
    color: var(--text-primary);
}

.btn-cancel:hover {
    background-color: var(--secondary-color);
    color: white;
}

.btn-save {
    background-color: var(--primary-color);
    color: white;
}

.btn-save:hover {
    background-color: var(--primary-hover);
}
</style>
