<template>
  <div class="note-detail">
    <input
      class="title"
      type="text"
      placeholder="タイトルを入力してください"
      v-model="title"
    />
    <textarea
      class="text"
      cols="30"
      rows="10"
      placeholder="本文を入力してください"
      v-model="text"
    ></textarea>
    <div class="buttons">
      <button @click="deleteNote">削除</button>
      <button @click="saveNote">保存</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoteDetail",
  data() {
    return {
      title: "",
      text: ""
    };
  },
  computed: {
    note() {
      return this.$store.state.notes.find(
        n => n.id === parseInt(this.$route.params.id)
      );
    }
  },
  created() {
    this.title = this.note ? this.note.title : "";
    this.text = this.note ? this.note.text : "";
  },
  methods: {
    saveNote() {
      const newNote = {
        id: this.note.id,
        title: this.title,
        text: this.text
      };
      this.$store.commit("updateNote", newNote);
    },
    deleteNote() {
      this.$store.commit("deleteNote", this.note.id);
      // 一覧画面に戻る
      this.$router.push("/notes");
    }
  }
};
</script>

<style scoped>
.note-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  margin-bottom: 10px;
}
.text {
  margin-bottom: 10px;
}
.buttons > button {
  margin: 0px 5px;
}
</style>
