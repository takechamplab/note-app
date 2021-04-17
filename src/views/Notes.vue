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
import axios from "axios";

export default {
  name: "Notes",
  data() {
    return {
      notes: []
    };
  },
  async mounted() {
    const res = await axios.get(
      "https://safe-meadow-71735.herokuapp.com/api/notes"
    );
    this.notes = res.data;
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
