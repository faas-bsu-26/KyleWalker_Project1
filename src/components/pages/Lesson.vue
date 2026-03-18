<script setup>
    import { useRoute } from 'vue-router';
    import { computed } from 'vue';
    import userData from '../../data/userData.js';
    import FileSection from '../FileSection.vue';
    import Journal from '../Journal.vue';
    import Button from '../Button.vue';
    import Dropdown from '../Dropdown.vue';

    const route = useRoute();

    const currentLesson = computed(() => {
        const courseId = route.query.courseId;
        const lessonId = route.query.lessonId;

        const course = userData.courses.find((c) => c.id === courseId);
        if (!course) return null;

        return course.lessons.find((l) => l.id === lessonId);
    });

    const comprehensionLevels = ['Weak', 'Working On It', 'Strong'];
</script>

<template>
    <div class="lesson" v-if="currentLesson">
        <div class="lesson-header">
            <h1>{{ currentLesson.title }}</h1>
            <div class="buttons">
                <Button msg="Share" />
                <Dropdown
                    title="Comprehension"
                    :options="comprehensionLevels"
                />
            </div>
        </div>

        <div class="file-sections">
            <FileSection
                title="Notes"
                :files="currentLesson.files?.notes || []"
            />
            <FileSection
                title="Homework"
                :files="currentLesson.files?.homework || []"
            />
            <FileSection
                title="External Links"
                :files="currentLesson.files?.externalLinks || []"
            />
        </div>

        <div class="journal-wrapper">
            <Journal :entries="currentLesson.journal || []" />
        </div>
    </div>
    <div v-else class="lesson empty-state">
        <p>Lesson not found</p>
    </div>
</template>

<style scoped>
    .lesson {
        padding: 2rem;
        width: 100%;
    }

    .lesson-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 3rem;
    }

    h1 {
        margin: 0;
        color: var(--text-primary);
        font-size: 2rem;
        font-weight: 700;
    }

    .buttons {
        display: flex;
        gap: 1rem;
        width: fit-content;
    }

    .file-sections {
        width: 75vw;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .journal-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 2rem;
    }

    .empty-state {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 400px;
        color: var(--text-secondary);
    }
</style>
