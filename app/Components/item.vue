<template>
    <div :class="{item, 'complete':todo.complete}">
        <label @click="toggleDoneTodo">
            <input type="checkbox" class="toggle" v-model="todo.complete">
            {{todo.name}}
        </label>
        <button class="delete" v-on:click="removeTodo"></button>
    </div>
</template>

<script>
export default {
    props: {
        todo: Object,
    },
    data() {
        return {
            item: true,
            // checked: false
        }
        
    },
    methods: {
        removeTodo() {
            this.$emit('del', this.todo.id)
        },
        toggleDoneTodo() {
            this.$emit('toggleDone', this.todo.id)
        }
    },
    
}
</script>

<style lang="scss" scope>
.item {
    position: relative;
    background: #ffffff;
    font-size: 24px;
    border-bottom: 1px solid rgba(0,0,0,0.06);
    &:hover {
        .delete:after {
            content: 'X';
        }
    }
    label {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 15px 30px 15px 15px;
        width: 400px;
        line-height: 28px;
        // white-space: pre-line; /* pre-line, pre-wrap均会自动换行，pre-line把多个空格合并成一个，pre-wrap保留全部空格； pre保留空格，不自动换行 */
        word-break: break-all; /* 允许在单词内换行 */
        transition: color 0.4s;
        .toggle {
            text-align: center ;
            border: none;
            top: 0;
            bottom: 0;
            margin: auto 0;
            margin-right: 15px;
            outline: none; 
            appearance: none;
            -webkit-appearance: none;
            &:before {
                content:url('/app/assets/images/round.png'); 
                cursor: pointer;
            }
            &:checked:before{
                content: url('/app/assets/images/done.png');
                cursor: pointer;
            }
        }
    }
    .delete {
        position: absolute;
        top: 50%;
        right: 10px;
        width: 40px;
        height: 40px;
        margin-top: -20px;
        border-width: 0;
        outline: none;
        background-color: transparent;
        font-size: 30px;
        color: #cc9a9a;
        cursor: pointer;
        transition: color 0.2s east-out;
    }   
}

.complete {
    label {
        color: #d9d9d9;
        text-decoration: line-through;
    }
    
}
    
</style>