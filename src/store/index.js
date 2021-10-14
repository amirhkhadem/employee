import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    //  wineUrl: "https://api.sampleapis.com/wines/reds",
    //  coffeeUrl: "https://api.sampleapis.com/wines/hot",
    // wines: [],
     EmployeeUrl: "https://procom-interview-employee-test.azurewebsites.net/Employee",
     employees: [],
     savingSuccessful: false,

  },
  getters: {
    
    getEmployees(state){
      return state.employees;
    },
    getSaving(state){
      return state.savingSuccessful;
    }
  },
  mutations: {
    
    SET_EMPLOYEES (state, employees){
      state.employees = employees;
    },
    SET_SAVING (state, status){
      state.savingSuccessful = status;
    },
    

  },
  actions: {
    
    async loadEmployees ({commit, state}, employeeid) {
          
          let response;
          if(employeeid){
            let URL = state.EmployeeUrl + "/" + employeeid;
            try {
                response = await axios.get(URL);
                let employees = response.data;
                commit('SET_EMPLOYEES', employees);
                
            } catch (e) {
                console.log('❌ ASYNC ERROR: loadEmployees: ' + e);
            }
          }
          else{
            let URL = state.EmployeeUrl;
            try {
                response = await axios.get(URL);
                let employees = response.data;
                commit('SET_EMPLOYEES', employees);
                

            } catch (e) {
                console.log('❌ ASYNC ERROR: loadEmployees: ' + e);
            }
          }

        
      
    },  

    async addEmployee({ state, commit}, payload){
      
        let URL = state.EmployeeUrl;
          try{ 
          let response = await axios.post(URL, payload);
          commit('SET_SAVING', true);
          console.log(response);
        }
        catch (e) {
            console.log("Error: Add Employee: ", e);
        }

    }

  },
  modules: {},
});


// async loadWines ({commit, state}) {
//   var response;
//       let URL = state.wineUrl;

//       try {
//           response = await axios.get(URL);
//           let wines = response.data;
//           commit('SET_WINES', wines);
//       } catch (e) {
//           console.log(' ASYNC ERROR: loadWines: ' + e);
//       }

  
// },  