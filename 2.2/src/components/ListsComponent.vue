<template>
    <div class="list-group">
        <a
            v-for="list in lists" :key="list.id"
            href="#"
            class="list-group-item list-group-item-action"
        >
            {{list.name}}
        </a>
    </div>
</template>
<script>
export default {
    data() {
        return {
            lists: [{
                id: 1,
                name: 'First Hardcoded List',
                items: []
            },{
                id: 2,
                name: 'Second Hardcoded List',
                items: []
            }]
        }
    }
}
</script>
