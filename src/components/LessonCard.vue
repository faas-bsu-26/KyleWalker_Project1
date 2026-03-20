<script setup>
    import { computed } from 'vue';

    const props = defineProps({
        title: String,
        description: String,
        knowledge: String,
    });

    const knowledgeColor = computed(() => {
        switch (props.knowledge) {
            case 'Strong':
                return 'var(--accent-color)';
            case 'Working on it':
                return '#FFA500';
            case 'Weak':
                return '#ef4444';
            default:
                return 'var(--secondary-color)';
        }
    });
</script>

<template>
    <div class="container" :style="{ '--lesson-border': knowledgeColor }">
        <div class="lesson-content">
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
            <span class="knowledge" :style="{ color: knowledgeColor }">{{
                knowledge
            }}</span>
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
        border: 2px solid var(--lesson-border);
        cursor: pointer;
    }

    .container:hover {
        box-shadow: var(--shadow-hover);
        transform: translateY(-4px);
    }

    .lesson-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        text-align: center;
    }

    .lesson-content h1 {
        margin: 0;
        font-size: 24px;
        font-weight: 600;
        color: var(--text-primary);
    }

    .lesson-content p {
        margin: 0;
        font-size: 14px;
        color: var(--text-secondary);
        line-height: 1.4;
    }

    .knowledge {
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
</style>
