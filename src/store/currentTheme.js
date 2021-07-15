export default {
    state: {
        question: '',
        answers: []
    },
    mutations: {
        SET_QUESTION(state, question){
            state.question = question
        }
    },
    getters: {
        getQuestion(state){
            return state.question
        },
        getAnswers(state){
            return state.answers
        }
    },
    actions: {
    },
}