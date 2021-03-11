import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Notes from "../views/Notes.vue";
import AddNote from "../views/AddNote.vue";
import NoteDetail from "../views/NoteDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/notes",
    name: "Notes",
    component: Notes
  },
  {
    path: "/notes/add",
    name: "AddNote",
    component: AddNote
  },
  {
    path: "/notes/:id",
    name: "AddNote",
    component: NoteDetail
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
