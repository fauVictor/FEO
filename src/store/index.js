import { createStore } from 'vuex'

import Data from './../data/defaultData'

import currentTeam from './currentTeam'
import currentTheme from './currentTheme'
import teams from './teams'
import themes from './themes'

export default createStore({
    modules: {
        teams: teams,
        themes: themes,
        currentTeam: currentTeam,
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
        }
    },
    actions: {
        INIT_APP(context){
            Data.map((el) => {
                context.commit('ADD_THEME', el)
            })
        },
        INIT_GAME(context){
            context.commit('PREPARE_ANSWERS')
            context.commit('SET_CURRENT_THEME')
        },
        SELECT_CARD(context, id){
            context.commit('SELECT_CARD', id)
            if(context.state.currentTheme.answers.find(answer => answer.id === id).isActive){
                console.log('ajouter des points');
            }else{
                console.log('retirer des points');
            }
        }
    }
})
