<template>
  <div class="about">
    <h1>{{item.text}}</h1>
    <button 
      class="btn btn-danger"
      @click.prevent="deleteItem()"
    >
      Delete
    </button>
  </div>
</template>
<script>
import {computed} from 'vue';
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';


export default {
  props: ['itemId'],
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const {listIndex, itemIndex} = store.getters.getListItemIndexes(props.itemId);
    const item = store.state.lists[listIndex].items[itemIndex];

    return {
      item: computed(() => item),
      deleteItem() {
        store.dispatch('deleteItem', {itemId: props.itemId}).then(() => {
          router.push('/');
        })
      }
    }
    
  },
}
</script>