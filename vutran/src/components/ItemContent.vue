<template>
  <div class="tab--description" 
    v-html="itemProps.content" 
    v-show="itemProps.status"
  >
  </div>
</template>

<script>
export default {
    name: "ItemContent",
    props: ['itemProps']
}
</script>

<style>
    .tab--description{
        padding: 20px 0;
    }
</style>