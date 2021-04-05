<template>
    <div class="list-group">
        <a
            v-for="list in lists" :key="list.id"
            href="#"
            :class="{active: list.id === selectedListId}"
            class="list-group-item list-group-item-action"
            @click.prevent="changeSelectedList(list)"

        >
            {{list.name}}
        </a>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex';
export default {
    computed: mapState([
        'lists',
        'selectedListId'
    ]),
    methods: {
        foo() {

        },
        ...mapMutations({
            changeSelectedList: 'selectList'
        })
    }
}
</script>
