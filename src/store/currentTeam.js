export default{
    state: {
        name: "",
        error: 0,
        score: 0
    },
    mutations: {
        RESET_SCORE(state){
            state.score = 0
        },
        RESET_ERROR(state){
            state.error = 0
        },
        INCREMENT_SCORE(state, point){
            state.score += point
        },
        DECREMENT_SCORE(state, point){
            if(state.score != 0 && state.score - point > 0){
                state.score -= point
            }
        },
        INCREMENT_ERROR(state){
            if(state.error < 3){
                state.error++
            }else if(state.error === 3){
                state.error = 0
                // state.score = 0
            }
        },
        DECREMENT_ERROR(state){
            if(state.error > 0){
                state.error--
            }
        },
    },
    getters: {
        getError(state){
            return state.error
        },
        getTeamName(state){
            return state.name
        },
        getTeamScore(state){
            return state.score
        }
    },
    actions: {
    },
}
