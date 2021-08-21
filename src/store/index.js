import { createStore } from 'vuex'

import Data from './../data/defaultData'

import CurrentTeam from './currentTeam'
import currentTheme from './currentTheme'
import themes from './themes'

export default createStore({
    modules: {
        themes: themes,
        team : CurrentTeam,
        currentTheme: currentTheme


    },
    mutations: {
        SET_CURRENT_THEME(state){
            if(state.currentTheme.question === ""){
                state.currentTheme = state.themes[0]
            }else{
                // todo si fini retour au menu principal
                let index = state.themes.indexOf(state.currentTheme)
                state.currentTheme = state.themes[index + 1]

            }
        },
    },
    actions: {
        INIT_APP(context){
            console.log(Data);
            Data.map((el) => {
                console.log(el);
                context.commit('ADD_THEME', el)
            })
        },
        INIT_GAME(context){
            context.commit('PREPARE_ANSWERS')
            context.commit('SET_CURRENT_THEME')
        },
        SELECT_CARD(context, id){
            context.commit('SELECT_CARD', id)
            if(context.state.currentTheme.answers.find(answer => answer.id === id - 1).isActive){
                context.commit('INCREMENT_SCORE', context.state.currentTheme.answers.find(answer => answer.id === id - 1).score)
            }else{
                context.commit('DECREMENT_SCORE', context.state.currentTheme.answers.find(answer => answer.id === id - 1).score)
            }
        },
        INCREMENT_ERROR(context){
            context.commit('INCREMENT_ERROR')
        },
        PASS_THEME(context){
            context.commit('SET_CURRENT_THEME')
            // context.commit('RESET_SCORE')
            context.commit('RESET_ERROR')
        }
    }
})
