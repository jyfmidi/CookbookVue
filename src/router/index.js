import { createRouter, createWebHistory } from "vue-router"
import Index from "../pages/Index.vue"
import RecipeCenter from "../pages/RecipeCenter.vue"

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/recipeCenter",
    name: "RecipeCenter",
    component: RecipeCenter
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router;