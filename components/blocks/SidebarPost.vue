<template>
  <aside class="sidebar">
    <div class="widget widget-subscription">
      <h4 class="widget-title">Get notified updates</h4>
      <form>
        <div class="form-group">
          <input type="email" class="form-control" placeholder="Your Email Address">
        </div>
        <button type="submit" class="btn btn-main">I am in</button>
      </form>
    </div>

    <!-- Widget Latest Posts -->
    <div class="widget widget-latest-post">
      <h4 class="widget-title">Latest Posts</h4>

      <div class="media" v-for="blog in blogs?.contents" :key="blog.id">
        <NuxtLink :to="`/${blog.id}`" class="pull-left">
          <img
            :src="blog.eyecatch?.url"
            :width="blog.eyecatch?.width"
            :height="blog.eyecatch?.height"
            alt=""
            class="media-object"
          />
        </NuxtLink>
        <div class="media-body">
          <h4 class="media-heading"><NuxtLink :to="`/${blog.id}`">{{ blog.title }}</NuxtLink></h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, officia.</p>
        </div>
      </div>

    </div>
    <!-- End Latest Posts -->

    <!-- Widget Category -->
    <div class="widget widget-category">
      <h4 class="widget-title">Categories</h4>
      <ul class="widget-category-list">
            <li v-for="category in categories?.contents" :key="category.id">
              <NuxtLink :to="`/${category.id}`">{{ category.name }}</NuxtLink>
            </li>
        </ul>
    </div> <!-- End category  -->

    <!-- Widget tag -->
    <div class="widget widget-tag">
      <h4 class="widget-title">Tag Cloud</h4>
      <ul class="widget-tag-list">
            <li><a href="#!">Animals</a>
            </li>
            <li><a href="#!">Landscape</a>
            </li>
            <li><a href="#!">Portrait</a>
            </li>
            <li><a href="#!">Wild Life</a>
            </li>
            <li><a href="#!">Video</a>
            </li>
        </ul>
    </div> <!-- End tag  -->
  </aside>
</template>

<script setup lang="ts">
import { Blog } from "~~/types/blog";
import { Category } from "~~/types/category";

const { data: blogs } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
});
const { data: categories } = await useMicroCMSGetList<Category>({
  endpoint: "categories",
});
console.log(blogs)
</script>