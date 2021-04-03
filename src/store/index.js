import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: []
  },
  mutations: {
    addNote(state, payload) {
      // id を作成してから追加する
      const newNote = {
        id: state.notes.length + 1,
        title: payload.title,
        body: payload.body
      };
      state.notes.push(newNote);
    },
    updateNote(state, newNote) {
      // 新しいノートと id が同じ state.note の内容を更新
      for (const note of state.notes) {
        if (note.id === newNote.id) {
          note.title = newNote.title;
          note.body = newNote.body;
        }
      }
    },
    deleteNote(state, noteId) {
      state.notes = state.notes.filter(n => n.id !== noteId);
    }
  },
  actions: {},
  modules: {}
});
