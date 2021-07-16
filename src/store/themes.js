export default {
    state: [],
    mutations: {
        ADD_THEME(state, theme = {}){
            state.push(theme)
        },
        DELETE_THEME(state, id){
            index = state.findIndex(theme => theme.id === id)
            state.splice(index, 1)
        }
    },
    actions: {
    },
    modules: {
    }
}