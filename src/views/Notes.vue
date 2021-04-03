<template>
  <div>
    <div v-if="notes.length" class="notes">
      <router-link
        v-for="note in notes"
        :key="note.id"
        :to="'/notes/' + note.id"
      >
        {{ note.title }}
      </router-link>
    </div>
    <div v-else>
      <div>ノートがありません</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notes",
  computed: {
    // store にある値をコンポーネントで使うための典型的な書き方
    notes() {
      return this.$store.state.notes;
    }
  }
};
</script>

<style scoped>
.notes {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
