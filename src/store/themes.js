export default {
    state: [],
    mutations: {
        ADD_THEME(state){
            state.push({})
        },
        DELETE_THEME(state, id){
            index = state.findIndex(theme => theme.id === id)
            state.cars.splice(index, 1)
        }
    },
    actions: {
    },
    modules: {
    }
}