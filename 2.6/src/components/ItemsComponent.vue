<template>
    <div 
        v-for="item in $store.getters.selectedItems" :key="item.id"
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
export default {
    computed: {

    }
}
</script>
