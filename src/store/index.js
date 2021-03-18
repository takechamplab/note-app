import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: []
  },
  mutations: {
    addNote(state, payload) {
      const newNote = {
        id: state.notes.length + 1,
        title: payload.title,
        body: payload.body
      };
      state.notes.push(newNote);
    },
    updateNote(state, note) {
      state.notes = state.notes.map(n => (n.id === note.id ? note : n));
    },
    deleteNote(state, noteId) {
      state.notes = state.notes.filter(n => n.id !== noteId);
    }
  },
  actions: {},
  modules: {}
});
