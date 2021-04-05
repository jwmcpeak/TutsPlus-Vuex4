<template>
    <div class="list-group">
        <a
            v-for="list in $store.state.lists" :key="list.id"
            href="#"
            class="list-group-item list-group-item-action"
        >
            {{list.name}}
        </a>
    </div>
</template>
<script>
export default {
    
}
</script>
