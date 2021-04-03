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
      <button @click="updateNote">保存</button>
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
    // store から対象のノートを取得
    const note = this.$store.state.notes.find(
      // this.$route.params.id は文字列なので parseInt で number 型に変換
      n => n.id === parseInt(this.$route.params.id)
    );
    if (note) {
      // 見つかったら値を data に移して編集できるようにしておく
      this.title = note.title;
      this.body = note.body;
    } else {
      // 見つからなかった場合は一覧画面に戻しておく
      this.$router.push("/notes");
    }
  },
  methods: {
    updateNote() {
      // this.$route.params.id は文字列なので parseInt で number 型に変換
      const newNote = {
        id: parseInt(this.$route.params.id),
        title: this.title,
        body: this.body
      };
      this.$store.commit("updateNote", newNote);
      // 一覧画面に戻る
      this.$router.push("/notes");
    },
    deleteNote() {
      // this.$route.params.id は文字列なので parseInt で number 型に変換
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
