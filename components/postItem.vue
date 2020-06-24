<template>
  <div class="post">
    <a class="post-header post-header-link clickable">
      <h4 class="title is-4">{{ title }}</h4>
      <h5 class="subtitle is-5">{{ subtitle }}</h5>
    </a>
    <div class="post-content">
      by Filip {{ moment(date).format('LLL') }}
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    title: {type: String},
    subtitle: {type: String},
    date: {type: Date, default: new Date()}
  },
  methods:{
     moment: function () {
  }
}
</script>

<style>

</style>
