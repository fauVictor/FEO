export default {
    state: {
        question: '',
        answers: []
    },
    mutations: {
        SET_QUESTION(state, question){
            state.question = question
        },
        SELECT_CARD(state, id){
            state.answers.find(answer => answer.id === id - 1).isActive = !state.answers.find(answer => answer.id === id - 1).isActive
        }
    },
    getters: {
        getQuestion(state){
            return state.question
        },
        getAnswers(state){
            return state.answers
        },
        getCard: (state) => (id) => {
            return state.answers.find((answer => answer.id === parseInt(id)))
        }
    },
    actions: {
    },
}