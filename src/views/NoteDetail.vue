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
import axios from "axios";

export default {
  name: "NoteDetail",
  data() {
    return {
      title: "",
      body: ""
    };
  },
  async mounted() {
    const res = await axios.get(
      `https://safe-meadow-71735.herokuapp.com/api/notes/${this.$route.params.id}`
    );
    const note = res.data;
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
    async updateNote() {
      const params = {
        title: this.title,
        body: this.body
      };
      await axios.put(
        `https://safe-meadow-71735.herokuapp.com/api/notes/${this.$route.params.id}`,
        params
      );
      // 一覧画面に戻る
      this.$router.push("/notes");
    },
    async deleteNote() {
      await axios.delete(
        `https://safe-meadow-71735.herokuapp.com/api/notes/${this.$route.params.id}`
      );
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
