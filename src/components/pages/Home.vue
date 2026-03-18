<script setup>
    import { ref, computed } from 'vue';
    import Button from '../Button.vue';
    import Dropdown from '../Dropdown.vue';
    import CourseCard from '../CourseCard.vue';
    import GroupCard from '../GroupCard.vue';
    import CouresForm from '../CouresForm.vue';
    import { userData } from '../../data/userData';

    const showCourseForm = ref(false);

    const filterOptions = [
        'Recently Added',
        'Highest Understanding',
        'Lowest Understanding',
    ];

    const semesterOptions = ['Spring 2026', 'Fall 2025', 'Spring 2025'];

    const courses = computed(() =>
        userData.courses.map((course) => ({
            ...course,
            recentLessons: course.lessons.slice(0, 2).map((l) => l.title),
        })),
    );

    const groups = computed(() =>
        userData.courses.flatMap((course) => course.groups || []),
    );
</script>

<template>
    <div>
        <h1>Home</h1>
        <div class="home-container">
            <div class="course-section">
                <div class="courses-filter">
                    <Dropdown title="Filter" :options="filterOptions" />
                    <Dropdown title="Semester" :options="semesterOptions" />
                    <Button
                        msg="Add"
                        icon="/plus-solid-full (1).svg"
                        :style="{
                            width: 'auto',
                            minWidth: '100px',
                            maxWidth: '150px',
                        }"
                        @click="showCourseForm = true"
                    />
                </div>
                <div class="courses">
                    <div v-for="course in courses" :key="course.id">
                        <router-link
                            :to="{
                                path: '/Course',
                                query: { courseId: course.id },
                            }"
                            class="course-link"
                        >
                            <CourseCard
                                :title="course.title"
                                :class-code="course.classCode"
                                :recent-lessons="course.recentLessons"
                                :knowledge="course.knowledge"
                            />
                        </router-link>
                    </div>
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
            <CouresForm
                :isOpen="showCourseForm"
                @close="showCourseForm = false"
            />
        </div>
    </div>
</template>

<style scoped>
    .home-container {
        display: flex;
        gap: 5rem;
    }

    .course-section {
        flex: 3;
        display: grid;
        gap: 3rem;
    }

    .courses-filter {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        gap: 1rem;
        align-items: center;
    }

    .courses {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        row-gap: 2rem;
    }

    .course-link {
        text-decoration: none;
        color: inherit;
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
