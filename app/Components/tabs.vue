<template>
    <div class="helper">
        <span class="left">{{activeNum}} items left</span>
        <span class="tabs">
            <span v-for="tab in tabs" :key="tab" :class="[filter === tab ? 'actived' : '']" @click="toggleTab(tab)">{{tab}}</span>
        </span>
        <span class="clear" @click="clearCompleted">Clear completed</span>
    </div>
</template>

<script>
export default {
    props: {
        todoList: {
            type: Array,
            required: true
        },
        filter: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            tabs: ['all', 'active', 'completed']
        }
    },
    methods: {
        toggleTab(tab) {
            this.$emit('toggle', tab)
        },
        clearCompleted() {
            this.$emit('clear')
        }
    },
    computed: {
        activeNum() {
            return this.todoList.filter(todo => !todo.complete).length
        }
    }
}
</script>

<style lang="scss" scope>
.helper {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    line-height: 30px;
    background-color: #ffffff;
    font-weight: 100;
    font-size: 14px;
    // font-smoothing: antialiased;
    .left, .tabs, .clear {
        padding: 0 10px;
        box-sizing: border-box;
    }
    .left, .clear {
        width: 150px;
    }
    .clear {
        cursor: pointer;
    }
    .tabs {
        width: 200px;
        display: flex;
        justify-content: space-around;
        * {
            display: inline-block;
            padding: 0 10px;
            cursor: pointer;
            border: 1px solid rgba(175, 47, 47, 0);
            &.actived {
                border-color: rgba(175, 47, 47, 0.4);
                border-radius: 5px;
            }
        }
    }

}


</style>