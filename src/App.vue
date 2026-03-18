<script setup>
    import { ref, computed } from 'vue';
    import { useRoute } from 'vue-router';
    import { userData } from './data/userData';

    const route = useRoute();
    const show = ref(false);
    const menuOpenCourses = ref(false);
    const menuOpenLessons = ref(false);
    const menuOpenGroups = ref(false);

    const courses = userData.courses;

    const recentLessons = computed(() =>
        courses
            .flatMap((course) =>
                course.lessons.map((lesson) => ({
                    ...lesson,
                    courseId: course.id,
                }))
            )
            .slice(0, 5)
    );

    const groups = computed(() =>
        courses.flatMap((course) =>
            (course.groups || []).map((group) => ({
                ...group,
                courseId: course.id,
            }))
        )
    );
</script>

<template>
    <div class="container">
        <nav>
            <div class="sidebar">
                <div class="user">
                    <img
                        src="/circle-user-solid-full.svg"
                        alt="User Icon"
                        class="user-icon"
                        @click="show = !show"
                    />
                    <div class="onboarding" :class="{ show: show }">
                        <RouterLink to="/SignIn"><p>Sign In</p></RouterLink>
                        <RouterLink to="/SignUp"><p>Sign Up</p></RouterLink>
                    </div>
                </div>
                <RouterLink to="/">
                    <div class="link-content">
                        <img
                            src="/house-solid-full.svg"
                            alt="Home Icon"
                            class="sidebar-icon"
                        />
                        <p>Home</p>
                    </div></RouterLink
                >
                <div
                    class="menu-item"
                    @click="menuOpenCourses = !menuOpenCourses"
                >
                    <div class="link-content">
                        <img
                            src="/book-solid-full.svg"
                            alt="Courses Icon"
                            class="sidebar-icon"
                        />
                        <p>Courses</p>
                    </div>
                    <span class="toggle">{{
                        menuOpenCourses ? '-' : '+'
                    }}</span>
                </div>
                <div v-if="menuOpenCourses" class="menu-content">
                    <div
                        v-for="course in courses"
                        :key="course.id"
                        class="menu-item"
                    >
                        <RouterLink
                            :to="{ path: '/Course', query: { courseId: course.id } }"
                            class="menu-link"
                            active-class="active-link"
                        >
                            {{ course.title }}
                        </RouterLink>
                    </div>
                </div>
                <div
                    class="menu-item"
                    @click="menuOpenLessons = !menuOpenLessons"
                >
                    <div class="link-content">
                        <img
                            src="/pen-solid-full.svg"
                            alt="Lessons Icon"
                            class="sidebar-icon"
                        />
                        <p>Lessons</p>
                    </div>
                    <span class="toggle">{{
                        menuOpenLessons ? '-' : '+'
                    }}</span>
                </div>
                <div v-if="menuOpenLessons" class="menu-content">
                    <div
                        v-for="lesson in recentLessons"
                        :key="lesson.id"
                        class="menu-item"
                    >
                        <RouterLink
                            :to="{ path: '/Lesson', query: { courseId: lesson.courseId, lessonId: lesson.id } }"
                            class="menu-link"
                        >
                            {{ lesson.title }}
                        </RouterLink>
                    </div>
                </div>

                <div
                    class="menu-item"
                    @click="menuOpenGroups = !menuOpenGroups"
                >
                    <div class="link-content">
                        <img
                            src="/clipboard-solid-full.svg"
                            alt="Groups Icon"
                            class="sidebar-icon"
                        />
                        <p>Groups</p>
                    </div>
                    <span class="toggle">{{
                        menuOpenGroups ? '-' : '+'
                    }}</span>
                </div>
                <div v-if="menuOpenGroups" class="menu-content">
                    <div
                        v-for="group in groups"
                        :key="group.id"
                        class="menu-item"
                    >
                        <RouterLink
                            :to="{ path: '/Group', query: { courseId: group.courseId, groupId: group.id } }"
                            class="menu-link"
                        >
                            {{ group.title }}
                        </RouterLink>
                    </div>
                </div>
            </div>
        </nav>

        <main class="pages">
            <RouterView />
        </main>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
    }

    .sidebar {
        width: 200px;
        height: 100vh;
        position: fixed;
        padding: 2rem;
        background-color: aliceblue;
        justify-items: center;
        text-align: center;
    }

    .user-icon {
        width: 50px;
        height: 50px;
        cursor: pointer;
    }

    .onboarding {
        width: 150px;
        position: absolute;
        top: 50px;
        left: 125px;
        padding: 1rem;
        background-color: lightgray;
        border-radius: 10px;
        display: none;
    }

    .onboarding.show {
        display: block;
    }

    .sidebar-icon {
        width: 30px;
        height: 30px;
    }

    .link-content {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
    }

    .link-content p {
        font-size: 20px;
        font-weight: bold;
        color: var(--primary-color);
    }

    /* Removed active link bubble styling per request */
    .menu-link {
        text-decoration: none;
        color: inherit;
    }

    .menu-link .link-content p {
        transition: color 0.2s ease;
    }

    .menu-link.router-link-active .link-content p {
        font-weight: 700;
    }

    .menu-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        padding: 0.5rem 0;
        width: 100%;
    }

    .toggle {
        font-size: 1.2rem;
        font-weight: bold;
        color: #2563eb;
    }

    .menu-content {
        margin-left: 1rem;
    }

    .menu-content .menu-item {
        padding: 0.25rem 0;
        cursor: default;
        justify-content: flex-start;
    }

    .menu-content .menu-item:hover {
        background-color: #f9fafb;
        border-radius: 4px;
    }

    .menu-link {
        text-decoration: none;
        color: inherit;
        display: block;
        width: 100%;
    }

    .pages {
        margin-left: 200px;
        padding: 2rem;
    }
</style>
