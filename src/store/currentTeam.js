export default{
    state: {
        name: "",
        error: 0,
        score: 0
    },
    mutations: {
        RESET_SCORE(state){
            state.score = 0
        }
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
