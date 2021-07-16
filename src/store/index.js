import { createStore } from 'vuex'

import Data from './../data/defaultData'
import Teams from './../data/defaultTeam'

import CurrentTeam from './currentTeam'
import currentTheme from './currentTheme'
import teams from './teams'
import themes from './themes'

export default createStore({
    modules: {
        teams: teams,
        themes: themes,
        currentTeam : CurrentTeam,
        currentTheme: currentTheme


    },
    mutations: {
        SET_CURRENT_THEME(state){
            if(state.currentTheme.question === ""){
                state.currentTheme = state.themes[0]
            }else{
                // todo si fini retour au menu principal
                let index = state.themes.indexOf(state.currentTheme)
                state.currentTheme = state.themes[index++]
            }
        },
        SET_CURRENT_TEAM(state){
            if(state.currentTeam.name === ""){
                state.currentTeam = state.teams[0]
                state.currentTeam.error = 0
            }else{
                // todo si fini retour au menu principal
                let index = state.themes.indexOf(state.currentTeam)
                state.currentTeam = state.themes[index++]
            }
        }
    },
    actions: {
        INIT_APP(context){
            Data.map((el) => {
                context.commit('ADD_THEME', el)
            })
            Teams.map((el) => {
                context.commit('CREATE_TEAM', el.name)
            })
        },
        INIT_GAME(context){
            context.commit('PREPARE_ANSWERS')
            context.commit('SET_CURRENT_THEME')
            context.commit('SET_CURRENT_TEAM')
        },
        SELECT_CARD(context, id){
            context.commit('SELECT_CARD', id)
            if(context.state.currentTheme.answers.find(answer => answer.id === id - 1).isActive){
                context.commit('INCREMENT_SCORE', context.state.currentTheme.answers.find(answer => answer.id === id - 1).score)
            }else{
                context.commit('DECREMENT_SCORE', context.state.currentTheme.answers.find(answer => answer.id === id - 1).score)
            }
        }
    }
})
