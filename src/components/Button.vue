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
    .button {
        min-width: 75px;
        padding: 0.5rem;
        background-color: royalblue;
        color: white;
        font-weight: bold;
        font-size: medium;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
    }

    .button:hover {
        background-color: rgb(51, 92, 217);
    }

    .button-icon {
        width: 20px;
        height: 20px;
    }
</style>
