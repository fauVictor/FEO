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
        INCREMENT_SCORE(state, point){
            state.score += point
        },
        DECREMENT_SCORE(state, point){
            state.score -= point
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
