<template>
    <div 
        v-for="item in selectedItems" :key="item.id"
        class="card mb-3"
        :class="[item.status ? 'bg-success text-white' : 'bg-light text-dark']"
    >
        <div class="card-body">
            <div class="card-text d-flex justify-content-between align-items-center">
                <div>
                    {{item.text}}
                </div>
                <button 
                    v-if="!item.status"
                    class="btn btn-primary"
                    @click.prevent="completeItem(item)"
                >
                    <i class="bi bi-check"></i>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import {computed} from 'vue';
import {useStore} from 'vuex';
export default {
    setup() {
        const store = useStore();

        return {
            selectedItems: computed(() => store.getters.selectedItems),
            completeItem(item) {
                store.dispatch('updateItem', {
                    id: item.id,
                    text: item.text,
                    status: true
                });
            }
        };
    },
}
</script>
