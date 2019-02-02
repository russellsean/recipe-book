<template>
  <v-container fluid>
    <v-parallax :src="require('@/assets/banner.jpg')" height="300">
      <v-layout
        column
        align-center
        justify-center
        class="white--text"
      >
        <h1 class="display-2 font-weight-thin mb-3">
          Rapid Recipes
        </h1>
        <h4 class="subheading">Create and share you recipes!</h4>
        <v-btn dark color="teal" round>Share A Recipe</v-btn>
      </v-layout>
    </v-parallax>
    <v-layout class="mt-5" align-center justify-center>
      <v-flex xs12 sm10 md8>
        <v-divider></v-divider>
        <h1 class="text-xs-center display-2 font-weight-thin">Check Out These Recipes!</h1>
        <v-divider class="mb-3"></v-divider>
        
        <v-container
          fluid
          grid-list-md
        >
          <v-layout row wrap justify-center>
            <v-flex xs12 sm6
              v-for="recipe in recipes"
              v-bind:key="recipe.id"
            >
              <v-card hover>
                <v-img :src="recipe.thumbnail" height="200px"></v-img>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline font-weight-thin mb-0">{{recipe.title}}</h3>
                    <p>{{recipe.description}}</p>
                    <h6 class="body-1 grey--text right font-weight-thin mb-0">{{recipe.chef}}</h6>
                  </div>
                </v-card-title>
                
                <v-divider></v-divider>
                <v-card-actions>
                <v-btn color="teal" outline @click.native="quick(recipe)">Quick View</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>            
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data: () => ({
    recipes: []
  }),
  mounted() {
    // Let's get all of the recipes from our database!
    this.db.collection('recipes').onSnapshot(liveRecipes => {
      this.recipes = [];
      liveRecipes.forEach(recipe => {
        this.recipes.push(recipe.data())
      });
    })
  },
  methods: {
    quick(recipe) {
      console.log(recipe.title)
    }
  }
}
</script>
