<script setup>
    import { computed } from 'vue';
    import Button from './Button.vue';

    const props = defineProps({
        title: String,
        classCode: String,
        recentLessons: [String],
        knowledge: Number,
    });

    const progress = computed(() => props.knowledge / 100);
</script>

<template>
    <div class="container">
        <div class="container-content">
            <div
                class="knowledge-container"
                :style="{ '--progress': progress }"
            >
                <p>{{ knowledge }}%</p>
            </div>
            <div class="course-info">
                <h1>{{ title }}</h1>
                <h2>{{ classCode }}</h2>
            </div>
            <div class="recent-lessons">
                <Button
                    v-for="lesson in recentLessons"
                    :key="lesson"
                    :msg="lesson"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        width: 320px;
        padding: 2rem 1.5rem;
        background-color: var(--card-background);
        border-radius: 16px;
        display: flex;
        justify-content: center;
        box-shadow: var(--shadow);
        transition:
            box-shadow 0.3s ease,
            transform 0.3s ease;
        border: 1px solid var(--border-color);
        cursor: pointer;
    }

    .container:hover {
        box-shadow: var(--shadow-hover);
        transform: translateY(-4px);
    }

    .container-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }

    .knowledge-container {
        position: relative;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background: conic-gradient(
            var(--primary-color) calc(var(--progress) * 360deg),
            #e5e7eb 0deg
        );
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: 700;
        color: var(--text-primary);
    }

    .knowledge-container::before {
        content: '';
        position: absolute;
        width: 90px;
        height: 90px;
        background-color: var(--card-background);
        border-radius: 50%;
        z-index: 1;
    }

    .knowledge-container p {
        position: relative;
        z-index: 2;
        margin: 0;
    }

    .course-info {
        text-align: center;
    }

    .course-info h1 {
        margin: 0 0 0.5rem 0;
        font-size: 24px;
        font-weight: 600;
        color: var(--text-primary);
    }

    .course-info h2 {
        margin: 0;
        font-size: 16px;
        font-weight: 500;
        color: var(--text-secondary);
    }

    .recent-lessons {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        width: 100%;
    }
</style>
