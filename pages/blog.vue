<template>
  <div class="page-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <sidebar_post />
        </div>
        <div class="col-md-8">
          <blog_post />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Blog | Nuxt',
  },
}
</script>