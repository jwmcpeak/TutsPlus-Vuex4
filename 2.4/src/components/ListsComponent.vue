<template>
    <div class="list-group">
        <a
            v-for="list in $store.state.lists" :key="list.id"
            href="#"
            :class="{active: list.id === $store.state.selectedListId}"
            class="list-group-item list-group-item-action"
            @click.prevent="$store.commit('selectList', list)"

        >
            {{list.name}}
        </a>
    </div>
</template>
<script>
export default {

}
</script>
