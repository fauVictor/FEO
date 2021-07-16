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
    actions: {
        INIT_APP(context){
            Data.map((el) => {
                context.commit('ADD_THEME', el)
            })
        }
    }
})
