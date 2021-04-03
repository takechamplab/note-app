<template>
  <div class="note-detail">
    <input
      class="title"
      type="text"
      placeholder="タイトルを入力してください"
      v-model="title"
    />
    <textarea
      class="body"
      cols="30"
      rows="10"
      placeholder="本文を入力してください"
      v-model="body"
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
      body: ""
    };
  },
  created() {
    const note = this.$store.state.notes.find(
      n => n.id === parseInt(this.$route.params.id)
    );
    if (note) {
      this.title = note.title;
      this.body = note.body;
    } else {
      this.title = "";
      this.body = "";
    }
  },
  methods: {
    saveNote() {
      const newNote = {
        id: this.$route.params.id,
        title: this.title,
        body: this.body
      };
      this.$store.commit("updateNote", newNote);
      // 一覧画面に戻る
      this.$router.push("/notes");
    },
    deleteNote() {
      this.$store.commit("deleteNote", parseInt(this.$route.params.id));
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
.body {
  margin-bottom: 10px;
}
.buttons > button {
  margin: 0px 5px;
}
</style>
