<template>
  <div class="add-note">
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
    <button class="save-button" @click="save">保存</button>
  </div>
</template>

<script>
export default {
  name: "AddNote",
  data() {
    return {
      title: "",
      text: ""
    };
  },
  methods: {
    save() {
      const payload = {
        title: this.title,
        text: this.text
      };
      this.$store.commit("addNote", payload);

      // リセット
      this.title = "";
      this.text = "";
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
.text {
  margin-bottom: 10px;
}
</style>
