import axios from "axios";

export default {
  state: {
    todos: [],
    comTodos: [],
  },
  getters: {
    allTodos: (state) => state.todos,
    allComTodos: (state) => state.comTodos,
  },
  mutations: {
    setTodos: (state, todos) => (state.todos = todos),
    setComTodos: (state, comTodos) => (state.comTodos = comTodos),
    setAddtodo: (state, todo) => state.todos.push(todo),
    setDeleteTodo: (state, id) => state.todos.filter((todo) => todo._id !== id),
  },
  actions: {
    async fetchTodos({ commit }) {
      const response = await axios.get(
        "http://localhost:3000/todo/uncompleted"
      );
      commit("setTodos", response.data);
    },
    async fetchComTodos({ commit }) {
      const response = await axios.get("http://localhost:3000/todo/completed");
      commit("setComTodos", response.data);
    },
    async addTodos({ commit }, title) {
      const response = await axios.post(
        "http://localhost:3000/todo/createtodo",
        { title, isCompleted: false }
      );
      commit("setAddtodo", response.data);
    },
    async deleteTodo({ commit }, id) {
      const response = await axios.delete(
        "http://localhost:3000/todo/deletetodo/" + id
      );
      commit("setDeleteTodo", response.data);
    },
    async comTodos({ commit }, id) {
      const response = await axios.post(
        "http://localhost:3000/todo/completed/" + id
      );
      commit("setCompletedTodo", response.data);
    },
  },
};
