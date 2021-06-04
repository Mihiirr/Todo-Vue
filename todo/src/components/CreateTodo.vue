<template>
  <div class="create_todo">
    <div class="">
      <h1 id="addTodo">Add ToDo</h1>
    </div>
    <form @submit="onSubmit">
      <div>
        <textarea v-model="newTodo" label="Add Todo" solo></textarea>
      </div>
      <div class="">
        <button type="submit">Add ToDo</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CreateTodo",
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    ...mapActions(["addTodos"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodos(this.newTodo);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.create_todo {
  margin: 20px;
}
</style>
