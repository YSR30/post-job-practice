import { createStore} from "vuex"

const store = createStore({
    state : {
        appName:"COS",
        userList:["User1","User2","User3","User4"],
          userDesc:{}
    },
    getters: {
        getUserList(state){
          return state.userList;
        },
        getUserDesc(state){
          return state.userDesc;
        }
      },
      mutations: {
        updateUserDesc(state,payload){
            console.log("debugger");
          state.userDesc[payload.userName] = payload;
        }
      },
      actions: {
      },
      modules: {
      }
    })
export default store;