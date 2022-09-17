import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
export default new Vuex.Store({
    plugins: [createPersistedState({
        storage: window.sessionStorage
    })],
    state: {
        dashboard: {
            tab: null
        }
    },
    getters: {
        dashboardTab: state => state.dashboard.tab
    },
    mutations: {
        SET_DASHBOARD_TAB(state, data){
            state.dashboard.tab = data
        }
    },
    actions: {
        getDashboardTab({commit}, data){
            commit('SET_DASHBOARD_TAB', data)
        }
    }
})
