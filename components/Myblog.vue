<template>
    <div>
        <p v-if="pending" class="custom-loader m-auto text-center"></p>

        <p v-else-if="error" class="text-center text-red-500">
            Failed to load Medium posts. Please check your Medium username in config.
        </p>

        <p v-else-if="!posts.length" class="text-center text-slate-500">
            No Medium posts found.
        </p>

        <div v-else>
            <article
                v-for="post in posts"
                :key="post.guid"
                class="group portfolio mb-12 flex flex-wrap align-middle"
            >
                <a
                    :href="post.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="relative h-52 w-full overflow-hidden rounded-2xl md:h-96 md:w-6/12"
                >
                    <img
                        v-if="hasImage(post)"
                        :src="getThumbnail(post)"
                        :alt="post.title"
                        class="absolute h-full w-full object-cover transform duration-200 group-hover:-translate-y-2 group-hover:shadow-xl"
                        @error="markBroken(post.guid)"
                    />
                    <div
                        v-else
                        class="absolute flex h-full w-full items-center justify-center bg-slate-100 text-sm font-semibold uppercase tracking-wide text-slate-400"
                    >
                        Medium Post
                    </div>
                </a>

                <div class="mt-5 w-full self-center md:mt-0 md:ml-10 md:w-5/12">
                    <p class="mb-2 text-sm font-medium text-blue-500">{{ formatDate(post.pubDate) }}</p>
                    <h3 class="text-2xl font-normal leading-tight text-slate-800 group-hover:underline md:text-4xl">
                        {{ post.title }}
                    </h3>
                    <p class="mb-4 mt-2 text-base text-slate-500">{{ getExcerpt(post.description) }}</p>

                    <a
                        :href="post.link"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="mt-5 inline-flex items-center text-slate-800 duration-200 group-hover:underline"
                    >
                        Read Article
                        <svg
                            class="ml-2 h-4 w-4 transform duration-200 group-hover:translate-x-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </article>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const mediumUsername = config.public.mediumUsername
const rssUrl = `https://medium.com/feed/@${mediumUsername}`
const endpoint = `${config.public.mediumRssToJsonEndpoint}${encodeURIComponent(rssUrl)}`

const { data, pending, error } = await useFetch(endpoint, {
    key: `medium-posts-${mediumUsername}`,
    transform: (response) => response?.items?.slice(0, 3) ?? []
})

const posts = computed(() => data.value ?? [])
const brokenImages = ref({})

const stripHtml = (html) => {
    if (!html) return ''
    return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

const getExcerpt = (html) => {
    const text = stripHtml(html)
    if (text.length <= 190) return text
    return `${text.slice(0, 187)}...`
}

const extractImage = (html) => {
    if (!html) return ''
    const match = html.match(/<img[^>]+src=["']([^"']+)["']/i)
    return match?.[1] ?? ''
}

const getThumbnail = (post) => {
    return post?.thumbnail || extractImage(post?.content) || extractImage(post?.description) || ''
}

const hasImage = (post) => {
    return Boolean(getThumbnail(post)) && !brokenImages.value[post.guid]
}

const markBroken = (guid) => {
    brokenImages.value[guid] = true
}

const formatDate = (value) => {
    if (!value) return ''
    return new Date(value).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
}
</script>

<style scoped>
.custom-loader {
    width: 45px;
    height: 40px;
    --c: linear-gradient(#3b82f6 0 0);
    background:
        var(--c) 0% 100%,
        var(--c) 50% 100%,
        var(--c) 100% 100%;
    background-size: 9px 100%;
    background-repeat: no-repeat;
    animation: b2 1s infinite linear;
}

@keyframes b2 {
    20% {
        background-size: 9px 60%, 9px 100%, 9px 100%;
    }

    40% {
        background-size: 9px 80%, 9px 60%, 9px 100%;
    }

    60% {
        background-size: 9px 100%, 9px 80%, 9px 60%;
    }

    80% {
        background-size: 9px 100%, 9px 100%, 9px 80%;
    }
}
</style>
