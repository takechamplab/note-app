<template>
  <div class="add-note">
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
    <button class="save-button" @click="save">保存</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddNote",
  data() {
    return {
      title: "",
      body: ""
    };
  },
  methods: {
    async save() {
      const params = {
        title: this.title,
        body: this.body
      };
      await axios.post(
        "https://safe-meadow-71735.herokuapp.com/api/notes",
        params
      );

      // 一覧画面に戻る
      this.$router.push("/notes");
    }
  }
};
</script>

<style scoped>
.add-note {
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
</style>
