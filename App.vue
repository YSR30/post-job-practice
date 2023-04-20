<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>COS</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/">PostJob</router-link>
      <router-link to="/ViewJob/1">ViewJob</router-link>
    </v-app-bar>
    <v-main>
   <router-view></router-view>
    
    </v-main>
  </v-app>
  
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    
  }),
}
</script>