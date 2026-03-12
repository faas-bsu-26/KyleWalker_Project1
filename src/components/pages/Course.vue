<script setup>
    import Button from '../Button.vue';
    import Dropdown from '../Dropdown.vue';
    import LessonCard from '../LessonCard.vue';
    import GroupCard from '../GroupCard.vue';

    const filterOptions = [
        'Recently Added',
        'Highest Understanding',
        'Lowest Understanding',
    ];

    const lessons = [
        {
            title: 'Clustering',
            description: 'Grouping similar data points.',
            knowledge: 'Working on it',
        },
        {
            title: 'Similarity',
            description: 'How similar two or more data points are.',
            knowledge: 'Weak',
        },
        {
            title: 'Normalization',
            description: 'Making all values in the data set be of equal value.',
            knowledge: 'Strong',
        },
        {
            title: 'Introduction',
            description: 'What is data mining?',
            knowledge: 'Strong',
        },
    ];

    const groups = [
        {
            title: 'Exam 1',
            classCode: 'CS 455',
            dueDate: 'February 25 at 10:00 AM',
        },
        {
            title: 'Homework 3',
            classCode: 'CS 455',
            dueDate: 'March 27 at 11:59 PM',
        },
    ];
</script>

<template>
    <div>
        <h1>Course</h1>
        <div class="course-container">
            <div class="lesson-section">
                <div class="lessons-filter">
                    <Dropdown title="Filter" :options="filterOptions" />
                    <Button msg="Add" icon="/plus-solid-full (1).svg" />
                </div>
                <div class="lessons">
                    <LessonCard
                        v-for="lesson in lessons"
                        :key="lesson.title"
                        :title="lesson.title"
                        :description="lesson.description"
                        :knowledge="lesson.knowledge"
                    />
                </div>
            </div>
            <div class="course-groups">
                <div class="group-text">
                    <h1>Groups</h1>
                </div>
                <div class="groups">
                    <GroupCard
                        v-for="group in groups"
                        :key="group.title"
                        :title="group.title"
                        :class-code="group.classCode"
                        :due-date="group.dueDate"
                    />
                    <Button msg="Add" icon="/plus-solid-full (1).svg" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .course-container {
        display: flex;
        gap: 5rem;
    }

    .lesson-section {
        flex: 3;
        display: grid;
        gap: 3rem;
    }

    .lessons-filter {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }

    .lessons {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        row-gap: 2rem;
    }

    .course-groups {
        flex: 1.5;
    }

    .group-text {
        margin-bottom: 15px;
        border-bottom: 2px solid black;
    }

    .groups {
        display: grid;
        justify-items: center;
        gap: 1rem;
    }
</style>
