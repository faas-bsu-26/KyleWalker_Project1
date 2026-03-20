<script setup>
    defineProps({
        msg: String,
        icon: String,
        alt: String,
    });
</script>

<template>
    <div class="button-container">
        <button class="button">
            <img v-if="icon" :src="icon" :alt="alt" class="button-icon" />{{
                msg
            }}
        </button>
    </div>
</template>

<style scoped>
    .button-container {
        width: 100%;
    }

    .button {
        width: 100%;
        padding: 0.75rem 1rem;
        background-color: var(--primary-color);
        color: white;
        font-weight: 500;
        font-size: 14px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        box-shadow: var(--shadow);
    }

    .button:hover {
        background-color: var(--primary-hover);
        box-shadow: var(--shadow-hover);
    }

    .button-icon {
        width: 16px;
        height: 16px;
    }
</style>
