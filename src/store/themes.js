export default {
    state: [],
    mutations: {
        ADD_THEME(state, theme = {}){
            state.push(theme)
        },
        DELETE_THEME(state, id){
            index = state.findIndex(theme => theme.id === id)
            state.splice(index, 1)
        },
        PREPARE_ANSWERS(state){
            const scores = [36, 16, 10, 8, 5, 5, 5]
            state.map((theme) => {
                theme.answers.sort((a, b) => b.point - a.point)
                theme.answers.map((answer, key) => {
                    answer.id = key,
                    answer.score = scores[key]
                    answer.isActive = false
                })
            })
        },
    },
    actions: {
    },
    modules: {
    }
}