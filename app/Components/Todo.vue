<template>
    <section class="todo">
        <input type="text" v-model="newTodo" placeholder="在这里创建你的新任务~" @keydown.enter="createTask">
        <item v-for="todo in filterTodoList" :todo="todo" :key="todo.id" @del="delTodo" @toggleDone="toggleComplete"></item>
        <!-- <item v-for="todo in todoList" :todo="todo" :key="todo.id" @del="delTodo" @toggleDone="toggleComplete"></item> -->
        <tabs :todoList="todoList" :filter="filter"  @toggle="toggleFilter" @clear="clearDone"></tabs>
    </section>
</template>

<script>
import item from "../Components/item"
import tabs from "../Components/tabs"

let id = 0

export default {
    data() {
        return {
            newTodo: "",
            todoList: [],
            filter: 'all',
            // checked: false
        }
    },
    components: {
        item,
        tabs
    },
    methods: {
        createTask(e) {
            if(this.newTodo.trim() === '') {
                alert('输入内容不能为空')
                return
            }
            this.todoList.push({id: id++, name: this.newTodo.trim(), complete: false})
            this.newTodo = "" 
        },
        delTodo(delItem) {
            this.todoList.splice(this.todoList.findIndex(todo => todo.id === delItem), 1)
        },
        toggleComplete(doneItem) {
            this.todoList[this.todoList.findIndex(todo => todo.id === doneItem)].complete = !this.todoList[this.todoList.findIndex(todo => todo.id === doneItem)].complete
        },
        toggleFilter(filter) {
            this.filter = filter
        },
        clearDone() {
            this.todoList = this.todoList.filter(todo => !todo.complete)
        }
    },
    computed: {
        filterTodoList() {
            if(this.filter === 'all') {
                return this.todoList
            }
            const completed = this.filter === 'completed'
            return this.todoList.filter(todo => todo.complete === completed)
        }
    },
}
</script>

<style lang="scss" scoped>
.todo {
    width: 600px;
    margin: 0px  auto;
    box-shadow: 0px 0px 5px #666;
    input {
        position: relative;
    margin: 0px;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4rem;
    border: 0;
    outline: none;
    color: inherit;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0px rgba(0,0,0,0);
    box-sizing: border-box;
    padding: 16px 16px 16px 60px;
    border: none;  
    }
}
</style>
