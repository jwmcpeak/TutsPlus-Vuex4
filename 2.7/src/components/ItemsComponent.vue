<template>
    <div 
        v-for="item in selectedItems" :key="item.id"
        class="card mb-3"
        :class="[item.status ? 'bg-success text-white' : 'bg-light text-dark']"
    >
        <div class="card-body">
            <p class="card-text">
                {{item.text}}
            </p>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['selectedItems'])
    }
}
</script>
