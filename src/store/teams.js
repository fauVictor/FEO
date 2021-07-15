export default {
    state: [],
    mutations: {
        CREATE_TEAM(state, name){
            state.push({
                name: name,
                score: 0
            })
        },
        DELETE_TEAM(state, id){
            index = state.findIndex(team => team.id === id)
            state.cars.splice(index, 1)
        }
    },
    actions: {
    },
    modules: {
    }
}