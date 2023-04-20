<template>
    <v-container fluid>
        <p>Post Job</p><br>
        <RouterView></RouterView>
        <v-row align="center">
            <v-col class="d-flex" cols="12" sm="6">
                
                <v-select :items="userList1" v-model="userName" label="Select a Service user" variant="outlined" prepend-icon="mdi-account-multiple">
            
    
                </v-select>
    
            </v-col>
            <v-col cols="12" sm="6">
                <v-menu>
                    <template v-slot:activator="{ on }">
                        <v-text-field v-model="date" variant="outlined" label="Select a date" input type="date" prepend-icon="mdi-calendar" v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="date" multiple></v-date-picker>
                </v-menu>
            </v-col>
    
        </v-row>
        <v-row>
            <v-col class="d-flex" cols="12" sm="12">
                <v-text-field label="Job Post Title" variant="outlined" v-model="title"></v-text-field>
    
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex" cols="12" sm="12">
                <v-textarea label="Job Post Description" variant="outlined" v-model="des" rows="4"></v-textarea>
            </v-col>
        </v-row>
        <v-row>
          <v-col  cols="12" lg="6">
              <h3>Shifts</h3>
          </v-col>
          <v-col  cols="12" lg="6">
            <div class="text-end">
              <v-btn @click="addShift()"
              variant="outlined" 
              prepend-icon="mdi-plus"
              tile outlined color="#005eb8"
              >
              Add Shift</v-btn>
            </div>
          </v-col>
      </v-row>

      
  <v-row>
    <v-col cols="12">
      <div v-for="(shift, index) in shifts" :key="index">
        <v-row>
          <v-col cols="12" sm="6">
            <v-menu>
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="shift.startTime"
                  variant="outlined"
                  label="Start Time"
                  input type="time"
                  prepend-icon="mdi-clock"
                  v-on="on"
                ></v-text-field>
              </template>   
            </v-menu>
          </v-col>
          <v-col cols="12" sm="6">
            <v-menu>
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="shift.endTime"
                  variant="outlined"
                  label="End Time"
                  input type="time"
                  prepend-icon="mdi-clock"
                  v-on="on"
                ></v-text-field>
              </template>   
            </v-menu>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-menu>
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="shift.date"
                  variant="outlined"
                  label="Date"
                  input type="date"
                  prepend-icon="mdi-calendar"
                  v-on="on"
                ></v-text-field>
              </template>   
            </v-menu>
          </v-col>
          <v-col cols="12" sm="6">
            <div class="text-end">
              <v-btn 
                variant="outlined" 
                prepend-icon="mdi-trash-can-outline"
                tile outlined color="#005eb8"
                @click="removeShift(index)"
              >
                Remove
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-col>
  </v-row>

      <v-row>
          <v-alert border="start" type="info" variant="outlined" elevation="5">Click the 'Add Shift' button to add a new shift to this booking.</v-alert>
      </v-row>
      
      <v-row>
          <v-col  cols="12" sm="6">
            <div class="pa-4 text-center">
              <v-btn v-on:click="clearAll()"
               variant="outlined"
               prepend-icon="mdi-close"
               tile outlined color="#005eb8"
              >CLEAR ALL</v-btn>
            </div>
          </v-col>
          <v-col  cols="12" sm="6">
            <div class="pa-4 text-center">
               <v-btn 
               @Click="updateData"
               color="#005eb8"
               class="text-white"
               prepend-icon="mdi-file-find" 
               > PREVIEW JOB POST
              </v-btn>
            </div>
          </v-col>
      </v-row>
    </v-container>
    </template>
    
        
    <script>
    export default {
        name:'PostJob',
    
        data() {
            return {
                userName:'',
                date: null,
                title: '',
                des: '',
                alert: true,
                shifts: [{
                    start: "",
                    end: ""
                }]
            }
        },
        computed:{
            userList1(){
                return this.$store.getters.getUserList;
            },
            userData(){
                return "";
            }
        },
        mounted(){
            console.log("mounted");
        },
        methods: {
            clearAll() {
                this.userName = '',
                    this.date = '',
                    this.title = '',
                    this.des = '',
                    this.shifts = ''
    
            },
            addShift() {
                this.shifts.push({
                    start: "",
                    end: ""
                });
            },
            removeShift(index) {
                this.shifts.splice(index, 1);
            }, 
            updateData(){
                let userData = {};
                userData['userName'] = this.userName;
                userData['date'] = this.date;
                userData['title'] = this.title;
                userData['des'] = this.des;
                userData['start'] = this.shifts.start;
                userData['end'] = this.shifts.end;
                this.$store.commit('updateUserDesc',JSON.parse(JSON.stringify(userData)));
                this.$router.push({ name: 'viewjob', params: { userName: this.userName} })
            }
        }
    }
    </script>