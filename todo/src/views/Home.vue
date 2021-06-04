<template>
  <div class="home">
    <CreateTodo />
    <TodoLists />
  </div>
</template>

<script>
// @ is an alias to /src
import CreateTodo from "../components/CreateTodo.vue";
import TodoLists from "../components/TodoLists.vue";

export default {
  name: "Home",
  components: {
    CreateTodo,
    TodoLists,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  align-items: center;
}
</style>
