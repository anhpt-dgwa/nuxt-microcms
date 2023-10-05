<template v-if="data">
  <section class="page-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="post post-single">
            <div class="post-thumb">
              <img
                :src="data.eyecatch?.url"
                :width="data.eyecatch?.width"
                :height="data.eyecatch?.height"
                alt=""
                class="img-responsive"
              />
            </div>
            <h2 class="post-title">{{ data.title }}</h2>
            <div class="post-meta">
              <ul>
                <li>
                  <i class="tf-ion-ios-calendar"></i> {{ data.publishedAt ?? data.createdAt }}
                </li>
                <li>
                  <i class="tf-ion-android-person"></i> POSTED BY ADMIN
                </li>
                <li>
                  <a href="#!"><i class="tf-ion-ios-pricetags"></i> {{ data.category?.name }}</a>
                </li>
                <li>
                  <a href="#!"><i class="tf-ion-chatbubbles"></i> 4 COMMENTS</a>
                </li>
              </ul>
            </div>
            <div v-html="data.content" class="post-content post-excerpt"></div>

          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Blog } from "~~/types/blog";

const { params } = useRoute();

const { data } = await useMicroCMSGetListDetail<Blog>({
  endpoint: "blogs",
  contentId: Array.isArray(params.id) ? params.id[0] : params.id,
});
console.log(data)
</script>

<style lang="scss">
  .post-content {
    img {
      max-width: 100%;
      height: auto;
    }
  }
</style>