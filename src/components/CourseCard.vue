<script setup>
    import Button from './Button.vue';

    defineProps({
        title: String,
        classCode: String,
        recentLessons: [String],
        knowledge: Number,
    });
</script>

<template>
    <div class="container">
        <div class="container-content">
            <div class="knowledge-container">
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
        width: 300px;
        padding: 1.5rem 1rem;
        background-color: #e5e5e5;
        align-content: center;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.6);
    }

    .container-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .knowledge-container {
        width: 125px;
        height: 125px;
        background-color: white;
        font-size: 36px;
        font-weight: bold;
        border: 6px solid #d4d4d4;
        border-radius: 50%;
        display: grid;
        align-content: center;
        justify-content: center;
    }

    .course-info {
        text-align: center;
    }

    .course-info h1 {
        margin: 0;
        font-size: 28px;
    }

    .course-info h2 {
        margin: 0;
        font-size: 18px;
        font-weight: bold;
    }

    .recent-lessons {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
</style>
