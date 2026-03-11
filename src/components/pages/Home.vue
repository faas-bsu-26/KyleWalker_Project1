<script setup>
    import Button from '../Button.vue';
    import Dropdown from '../Dropdown.vue';

    const filterOptions = [
        'Recently Added',
        'Highest Understanding',
        'Lowest Understanding',
    ];

    const semesterOptions = ['Spring 2026', 'Fall 2025', 'Spring 2025'];
</script>

<template>
    <div>
        <h1>Home</h1>
        <div class="courses-buttons">
            <Dropdown title="Filter" :options="filterOptions" />
            <Dropdown title="Semester" :options="semesterOptions" />
            <Button msg="Add" icon="/plus-solid-full (1).svg" />
        </div>
    </div>
</template>

<style scoped>
    .courses-buttons {
        width: 50vw;
        display: flex;
        justify-content: space-between;
    }
</style>
