<template>
  <div>
    <navbar />
    <div class="blogs-page">
      <div class="main-content">
        <div class="container">
          <div class="columns is-mobile">
            <div class="column is-8 is-offset-2">
              <div class="section">
                <div class="title">
                  <h1>Newest Posts</h1>
                  <hr>
                </div>
                <postItem
                  v-for="post in posts"
                  :key="post.id"
                  :title="post.title"
                  :subtitle="post.subtitle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '~/components/navbar.vue'
import postItem from '~/components/postItem.vue'
export default {
  components: {
    navbar,
    postItem
  },
  data(){
    return{
      posts: [
        {
          id: 1,
          title: 'My first post',
          subtitle: 'My first subtitle post'
        },
        {
          id: 2,
          title: 'My second post',
          subtitle: 'My seconf subtitle post'
        }
      ]
    }
  }
}
</script>

<style>
  .post-content {
    font-style: italic;
  }
  .post {
    margin-bottom: 20px;
    padding: 5px;
    border-bottom: 2px solid transparent;
  }
  .post:hover {
    border-bottom: 2px solid #e8e8e8;
  }
</style>
