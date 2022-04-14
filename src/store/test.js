export default {
    actions: {
        textChange({commit}) {
            commit('textMutate');
        },
        IncreaseNum({commit}) {
            commit('numAdd');
        },
        DecreaseNum({commit}) {
            commit('numSub');
        },
        SayHello({commit}) {
            commit('addHello');
        }   
    },
    mutations: {
        textMutate(state) {
            state.text = 'world'
        },
        numAdd(state) {
            state.num = state.num + 1
        },
        numSub(state) {
            state.num = state.num - 1
        },
        addHello(state) {
            state.hellos.push(state.butt_text);
        }
    },
    state: {
        text: 'hello',
        num: 0,
        butt_text: 'Hello!',
        hellos: []
    },
    getters: {
        setText(state) {
            return state.text
        },
        getNum(state) {
            return state.num
        },
        getButtonText(state) {
            return state.hellos
        }
    }
}