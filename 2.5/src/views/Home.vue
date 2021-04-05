<template>
  <div class="row">
    <div class="col-4">
      <lists />
    </div>
    <div class="col-8">
      <items />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Lists from './../components/ListsComponent.vue';
import Items from './../components/ItemsComponent.vue';

export default {
  name: 'Home',
  components: {
    Lists,
    Items
  },
  created() {
    // http request
    // populdate lists data
    // passed on 
  }
}
</script>
