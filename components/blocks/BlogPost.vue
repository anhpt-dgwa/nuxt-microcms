<template>
  <div class="post" v-for="blog in data?.contents" :key="blog.id">
    <div class="post-media post-thumb">
      <NuxtLink :to="`/${blog.id}`">
        <img
          :src="blog.eyecatch?.url"
          :width="blog.eyecatch?.width"
          :height="blog.eyecatch?.height"
          alt=""
        />
      </NuxtLink>
    </div>
    <h2 class="post-title"><NuxtLink :to="`/${blog.id}`">{{ blog.title }}</NuxtLink></h2>
    <div class="post-meta">
      <ul>
        <li>
          <i class="tf-ion-ios-calendar"></i> {{ blog.publishedAt ?? blog.createdAt }}
        </li>
        <li>
          <i class="tf-ion-android-person"></i> POSTED BY ADMIN
        </li>
        <li>
          <a href="#!"><i class="tf-ion-ios-pricetags"></i> {{ blog.category?.name }}</a>
        </li>
        <li>
          <a href="#!"><i class="tf-ion-chatbubbles"></i> 4 COMMENTS</a>
        </li>
      </ul>
    </div>
    <div class="post-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum asperiores vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam fugiat quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vitae ab doloremque accusamus sit, eos dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, facere. </p>
      <NuxtLink :to="`/${blog.id}`" class="btn btn-main">Continue Reading</NuxtLink>
    </div>
  </div>

  <Pagination />

  <div class="text-center">
    <ul class="pagination post-pagination">
      <li><a href="#!">Prev</a>
      </li>
      <li class="active"><a href="#!">1</a>
      </li>
      <li><a href="#!">2</a>
      </li>
      <li><a href="#!">3</a>
      </li>
      <li><a href="#!">4</a>
      </li>
      <li><a href="#!">5</a>
      </li>
      <li><a href="#!">Next</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Blog } from "~~/types/blog";

const { data } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
  queries: { limit: 1 },
});
console.log(data)
</script>