<script setup>
    import Button from '../Button.vue';
    import Dropdown from '../Dropdown.vue';
    import CourseCard from '../CourseCard.vue';
    import GroupCard from '../GroupCard.vue';

    const filterOptions = [
        'Recently Added',
        'Highest Understanding',
        'Lowest Understanding',
    ];

    const semesterOptions = ['Spring 2026', 'Fall 2025', 'Spring 2025'];

    const courses = [
        {
            title: 'HCI',
            classCode: 'CS 445',
            recentLessons: ['Info Gathering', 'Digital Design Tools'],
            knowledge: 50,
        },
        {
            title: 'Data mining',
            classCode: 'CS 455',
            recentLessons: ['Clustering', 'Similarity'],
            knowledge: 37,
        },
        {
            title: 'Database Design',
            classCode: 'CS 418',
            recentLessons: ['Advanced SQL', 'ER Diagrams'],
            knowledge: 75,
        },
        {
            title: 'Backend Web Dev',
            classCode: 'CS 312',
            recentLessons: ['Docker', 'Typescript'],
            knowledge: 100,
        },
    ];

    const groups = [
        {
            title: 'Exam 1',
            classCode: 'CS 455',
            dueDate: 'February 25 at 10:00 AM',
        },
        {
            title: 'Project 1',
            classCode: 'CS 445',
            dueDate: 'March 20 at 11:59 PM',
        },
        {
            title: 'Project 3',
            classCode: 'CS 312',
            dueDate: 'April 18 at 11:59 PM',
        },
    ];
</script>

<template>
    <div>
        <h1>Home</h1>
        <div class="home-container">
            <div class="course-container">
                <div class="courses-buttons">
                    <Dropdown title="Filter" :options="filterOptions" />
                    <Dropdown title="Semester" :options="semesterOptions" />
                    <Button msg="Add" icon="/plus-solid-full (1).svg" />
                </div>
                <div class="courses">
                    <CourseCard
                        v-for="course in courses"
                        :key="course.title"
                        :title="course.title"
                        :class-code="course.classCode"
                        :recent-lessons="course.recentLessons"
                        :knowledge="course.knowledge"
                    />
                </div>
            </div>
            <div class="upcoming-groups">
                <div class="group-text">
                    <h1>Upcoming Groups</h1>
                </div>
                <div class="groups">
                    <GroupCard
                        v-for="group in groups"
                        :key="group.title"
                        :title="group.title"
                        :class-code="group.classCode"
                        :due-date="group.dueDate"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .home-container {
        display: flex;
        gap: 5rem;
    }

    .course-container {
        flex: 3;
        display: grid;
        gap: 3rem;
    }

    .courses-buttons {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .courses {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        row-gap: 2rem;
    }

    .upcoming-groups {
        flex: 1.5;
    }

    .group-text {
        margin-bottom: 15px;
        border-bottom: 2px solid black;
    }

    .groups {
        display: grid;
        gap: 1rem;
    }
</style>
