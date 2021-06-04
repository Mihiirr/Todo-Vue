<template>
  <div class="todolists">
    <div class="uncompletedTodo">
      <div>
        <h1>Uncompleted ToDo</h1>
      </div>
      <div
        v-for="todo in allTodos"
        :key="todo._id"
        class="uncompletedtodo_list"
      >
        <li>
          {{ todo.title }}
        </li>
        <div>
          <button type="button" @click="comTodos(todo._id)">Done</button>
          <button type="button" @click="deleteTodo(todo._id)">Delete</button>
        </div>
      </div>
    </div>

    <div class="completedTodo">
      <div>
        <h1>Completed ToDo</h1>
      </div>
      <div
        v-for="todo in allComTodos"
        :key="todo._id"
        class="completedTodo_lists"
      >
        <li>{{ todo.title }}</li>
        <button type="button" @click="deleteTodo(todo._id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TodoLists",
  methods: {
    ...mapActions(["fetchTodos"]),
    ...mapActions(["fetchComTodos"]),
    ...mapActions(["deleteTodo"]),
    ...mapActions(["comTodos"]),
  },
  computed: mapGetters(["allTodos", "allComTodos"]),
  created() {
    this.fetchTodos();
    this.fetchComTodos();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todolists {
  display: flex;
}

.uncompletedTodo {
  margin: 20px;
}

.completedTodo {
  margin: 20px;
}

.uncompletedtodo_list {
  margin: 10px;
  display: flex;
  align-items: center;
}

.completedTodo_lists {
  margin: 10px;
  display: flex;
  align-items: center;
}

.uncompletedtodo_list button {
  margin-left: 10px;
}

.completedTodo_lists button {
  margin-left: 10px;
}
</style>
