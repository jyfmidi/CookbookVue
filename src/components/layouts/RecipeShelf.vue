<template>
  <v-container>
    <v-row
      v-for="n in rowCount"
      :key="n"
    >
      <v-col
        v-for="k in colCount"
        :key="k"
      >
        <div v-if="getRecipeIdx(n, k) < recipeList.length">
          <RecipeCard :recipeInfo="recipeList[getRecipeIdx(n, k)]" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import useRecipeList from "../../hooks/useRecipeList";
import RecipeCard from "../widgets/RecipeCard.vue";

export default {
  name: "RecipeShelf",

  components: {
    RecipeCard,
  },

  setup() {
    let colCount = 3;
    let recipeList = useRecipeList();
    let rowCount = Math.trunc(recipeList.length / colCount);

    function getRecipeIdx(row, col) {
      return (row - 1) * colCount + col;
    }

    return { colCount, rowCount, recipeList, getRecipeIdx };
  },
};
</script>
