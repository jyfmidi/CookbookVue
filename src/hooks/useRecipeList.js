import { reactive } from "vue";
export default function () {
    let recipeList = reactive([])

    function getRecipeList() {
        let recipe1 = reactive({
            gene: "sd2fdf1g123vg",
            name: "Shit Cake",
            ingredientsGene: ["shit233", "egg233", "flour233"],
            ingredientsQuantity: [100000, 60000, 60000]
        })
        let recipe2 = reactive({
            gene: "fhf1age45gd",
            name: "Shit Scone",
            ingredientsGene: ["shit233", "butter233", "flour233"],
            ingredientsQuantity: [20000, 32000, 54000]
        })
        let recipe3 = reactive({
            gene: "f8wjkjef67ij",
            name: "Shit Smoothie",
            ingredientsGene: ["shit233", "pee233", "milk233"],
            ingredientsQuantity: [20000, 150000, 60000]
        })

        var i = 0

        for (i = 0; i < 4; i++) {
            recipeList.push(recipe1)
        }
        for (i = 0; i < 2; i++) {
            recipeList.push(recipe2)
        }
        for (i = 0; i < 3; i++) {
            recipeList.push(recipe3)
        }
    }

    getRecipeList()

    return recipeList
}