import { createStore } from 'vuex'
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

    }
})
