<script setup>
    import { ref, computed } from 'vue';
    import { useRoute } from 'vue-router';
    import Button from '../Button.vue';
    import Dropdown from '../Dropdown.vue';
    import LessonCard from '../LessonCard.vue';
    import GroupCard from '../GroupCard.vue';
    import LessonForm from '../LessonForm.vue';
    import GroupForm from '../GroupForm.vue';
    import { userData } from '../../data/userData';

    const route = useRoute();
    const showLessonForm = ref(false);
    const showGroupForm = ref(false);

    const filterOptions = [
        'Recently Added',
        'Highest Understanding',
        'Lowest Understanding',
    ];

    const currentCourse = computed(() => {
        const courseId = route.query.courseId;
        return (
            userData.courses.find((c) => c.id === courseId) ||
            userData.courses[0]
        );
    });

    const lessons = computed(() => currentCourse.value.lessons || []);
    const groups = computed(() => currentCourse.value.groups || []);
</script>

<template>
    <div>
        <h1>{{ currentCourse.title }}</h1>
        <div class="course-container">
            <div class="lesson-section">
                <div class="lessons-filter">
                    <Dropdown title="Filter" :options="filterOptions" />
                    <Button
                        msg="Edit Lessons"
                        icon="/plus-solid-full (1).svg"
                        :style="{
                            width: 'auto',
                        }"
                        @click="showLessonForm = true"
                    />
                </div>
                <div class="lessons">
                    <RouterLink
                        v-for="lesson in lessons"
                        :key="lesson.id"
                        :to="{
                            path: '/Lesson',
                            query: {
                                courseId: currentCourse.id,
                                lessonId: lesson.id,
                            },
                        }"
                    >
                        <LessonCard
                            :title="lesson.title"
                            :description="lesson.description"
                            :knowledge="lesson.knowledge"
                        />
                    </RouterLink>
                </div>
            </div>
            <div class="course-groups">
                <div class="group-text">
                    <h1>Groups</h1>
                </div>
                <div class="groups">
                    <RouterLink
                        v-for="group in groups"
                        :key="group.id"
                        :to="{
                            path: '/Group',
                            query: {
                                courseId: currentCourse.id,
                                groupId: group.id,
                            },
                        }"
                        class="card-link"
                    >
                        <GroupCard
                            :title="group.title"
                            :class-code="group.classCode"
                            :due-date="group.dueDate"
                        />
                    </RouterLink>
                    <Button
                        msg="Edit Groups"
                        icon="/plus-solid-full (1).svg"
                        :style="{
                            width: 'auto',
                            minWidth: '100px',
                            maxWidth: '150px',
                        }"
                        @click="showGroupForm = true"
                    />
                </div>
            </div>
        </div>
        <GroupForm :isOpen="showGroupForm" @close="showGroupForm = false" />
        <LessonForm :isOpen="showLessonForm" @close="showLessonForm = false" />
    </div>
</template>

<style scoped>
    .course-container {
        display: grid;
        grid-template-columns: 1fr 380px;
        gap: 4rem;
        align-items: start;
    }

    .lesson-section {
        display: grid;
        gap: 3rem;
    }

    .lessons-filter {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        gap: 1rem;
        align-items: center;
    }

    .lessons {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }

    .course-groups {
        width: 100%;
        display: grid;
        gap: 1.5rem;
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
