<script setup>
    defineProps({
        isOpen: Boolean,
    });

    const emit = defineEmits(['close']);
</script>

<template>
    <div v-if="isOpen" class="modal-overlay" @click="emit('close')">
        <div class="modal-content" @click.stop>
            <h2>Create Lesson</h2>
            <form>
                <div class="form-group">
                    <label>Lesson Name:</label>
                    <input
                        type="text"
                        placeholder="ex. Intro To Computer Science"
                    />
                </div>

                <div class="form-group">
                    <label>Description:</label>
                    <textarea
                        placeholder="ex. This lesson mainly consists of the points..."
                        rows="6"
                    />
                </div>

                <div class="form-group">
                    <label>Notes:</label>
                    <div class="upload-area">
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                            />
                            <polyline points="17 8 12 3 7 8" />
                            <line x1="12" y1="3" x2="12" y2="15" />
                        </svg>
                        <p>Upload</p>
                    </div>
                </div>

                <div class="form-actions">
                    <button
                        type="button"
                        class="btn-cancel"
                        @click="emit('close')"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        class="btn-save"
                        @click="emit('close')"
                    >
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

    input[type='text'],
    textarea {
        padding: 0.75rem;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        font-family: inherit;
        font-size: 0.95rem;
        color: var(--text-primary);
        background-color: var(--background-color);
    }

    input[type='text']:focus,
    textarea:focus {
        outline: none;
        border-color: var(--primary-color);
    }

    input::placeholder,
    textarea::placeholder {
        color: var(--text-secondary);
    }

    textarea {
        resize: vertical;
    }

    .upload-area {
        border: 2px solid var(--border-color);
        border-radius: 8px;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
    }

    .upload-area:hover {
        border-color: var(--primary-color);
    }

    .upload-area svg {
        color: var(--text-secondary);
    }

    .upload-area p {
        margin: 0;
        font-weight: 600;
        color: var(--text-primary);
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
