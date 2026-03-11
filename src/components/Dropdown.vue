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
        min-width: 75px;
        padding: 0.5rem;
        padding-right: 2rem;
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
        appearance: none;
        background-image: url('/angle-down-solid-full.svg');
        background-repeat: no-repeat;
        background-position: right 0.5rem center;
        background-size: 14px;
    }

    #dropdown:hover {
        background-color: rgb(51, 92, 217);
    }

    #dropdown option {
        background-color: white;
        color: black;
    }
</style>
