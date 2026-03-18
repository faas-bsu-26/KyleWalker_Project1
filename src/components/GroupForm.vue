<script setup>
import { ref } from 'vue';

defineProps({
    isOpen: Boolean,
});

const emit = defineEmits(['close']);

const lessons = ref(['', '', '']);

const addLesson = () => {
    lessons.value.push('');
};

const removeLesson = (index) => {
    lessons.value.splice(index, 1);
};
</script>

<template>
    <div v-if="isOpen" class="modal-overlay" @click="emit('close')">
        <div class="modal-content" @click.stop>
            <h2>Create Group</h2>
            <form>
                <div class="form-group">
                    <label>Group Name:</label>
                    <input
                        type="text"
                        placeholder="ex. Exam 1"
                    />
                </div>

                <div class="form-group">
                    <label>Lessons:</label>
                    <div class="lessons-list">
                        <div v-for="(lesson, index) in lessons" :key="index" class="lesson-input-row">
                            <input
                                type="text"
                                placeholder="ex. Intro To Computer Science"
                            />
                            <button
                                v-if="index < lessons.length - 1"
                                type="button"
                                class="btn-remove"
                                @click="removeLesson(index)"
                            >
                                −
                            </button>
                            <button
                                v-else
                                type="button"
                                class="btn-add"
                                @click="addLesson"
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label>End Date and Time:</label>
                    <input
                        type="text"
                        placeholder="ex. February 24 at 10:00 AM"
                    />
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

.lessons-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.lesson-input-row {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

.lesson-input-row input {
    flex: 1;
}

.btn-add,
.btn-remove {
    width: 36px;
    height: 36px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background-color: var(--background-color);
    color: var(--text-primary);
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
}

.btn-add:hover,
.btn-remove:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
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
