<template>
  <div class="container">
    {{ posts }}
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const [productions] = await Promise.all([
      app.$axios.get('https://yuzobcsj9a.microcms.io/api/v1/blogs', { headers: {'X-API-KEY': 'q3wOL4p41lveC4pSEBGiMGIbgkf8FCFxltjg'} })
    ])
    return {
      posts: productions.data
    }
  },
}
</script>