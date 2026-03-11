<script setup>
    import { ref } from 'vue';

    const show = ref(false);
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
                <RouterLink to="/Course"
                    ><div class="link-content">
                        <img
                            src="/book-solid-full.svg"
                            alt="Course Icon"
                            class="sidebar-icon"
                        />
                        <p>Course</p>
                    </div></RouterLink
                >
                <RouterLink to="/Lesson"
                    ><div class="link-content">
                        <img
                            src="/pen-solid-full.svg"
                            alt="Lesson Icon"
                            class="sidebar-icon"
                        />
                        <p>Lesson</p>
                    </div></RouterLink
                >
                <RouterLink to="/Group"
                    ><div class="link-content">
                        <img
                            src="/clipboard-solid-full.svg"
                            alt="Group Icon"
                            class="sidebar-icon"
                        />
                        <p>Group</p>
                    </div></RouterLink
                >
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
    }

    .pages {
        margin-left: 200px;
        padding: 2rem;
    }
</style>
