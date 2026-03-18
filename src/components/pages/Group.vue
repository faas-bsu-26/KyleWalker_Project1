<script setup>
    import { useRoute } from 'vue-router';
    import { computed } from 'vue';
    import userData from '../../data/userData.js';
    import LessonCard from '../LessonCard.vue';
    import FileSection from '../FileSection.vue';
    import Journal from '../Journal.vue';
    import Button from '../Button.vue';

    const route = useRoute();

    const currentGroup = computed(() => {
        const courseId = route.query.courseId;
        const groupId = route.query.groupId;

        const course = userData.courses.find((c) => c.id === courseId);
        if (!course) return null;

        return course.groups.find((g) => g.id === groupId);
    });

    const groupLessons = computed(() => {
        if (!currentGroup.value || !currentGroup.value.lessons) return [];

        const course = userData.courses.find(
            (c) => c.id === route.query.courseId,
        );
        if (!course) return [];

        return currentGroup.value.lessons
            .map((lessonId) => {
                const lesson = course.lessons.find((l) => l.id === lessonId);
                return lesson ? { ...lesson, courseId: course.id } : null;
            })
            .filter((l) => l !== null);
    });
</script>

<template>
    <div class="group" v-if="currentGroup">
        <div class="group-header">
            <h1>{{ currentGroup.title }}</h1>
            <div class="buttons">
                <Button msg="Edit" />
                <Button msg="Share" />
            </div>
        </div>

        <div class="group-container">
            <div class="lessons-section">
                <h2>Lessons</h2>
                <div class="lessons-grid">
                    <LessonCard
                        v-for="lesson in groupLessons"
                        :key="lesson.id"
                        :title="lesson.title"
                        :knowledge="lesson.knowledge"
                        :to="`/?courseId=${route.query.courseId}&lessonId=${lesson.id}`"
                    />
                </div>
            </div>

            <div class="sidebar-section">
                <FileSection
                    title="External Links"
                    :files="currentGroup.files?.externalLinks || []"
                />
            </div>
        </div>

        <Journal :entries="currentGroup.journal || []" />
    </div>
    <div v-else class="group empty-state">
        <p>Group not found</p>
    </div>
</template>

<style scoped>
    .group {
        padding: 2rem;
    }

    .group-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
    }

    h1 {
        margin: 0;
        color: var(--text-primary);
        font-size: 2rem;
        font-weight: 700;
    }

    h2 {
        margin: 0 0 1rem 0;
        color: var(--text-primary);
        font-size: 1.25rem;
        font-weight: 600;
    }

    .buttons {
        display: flex;
        gap: 1rem;
    }

    .group-container {
        display: grid;
        grid-template-columns: 1fr 380px;
        gap: 4rem;
        margin-bottom: 2rem;
    }

    .lessons-section {
        display: flex;
        flex-direction: column;
    }

    .lessons-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }

    .sidebar-section {
        display: flex;
        flex-direction: column;
    }

    .empty-state {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 400px;
        color: var(--text-secondary);
    }
</style>
