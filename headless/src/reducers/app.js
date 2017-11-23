import InitialState from './initialState'

function app(state = InitialState, action) {
    let nextState = Object.assign({}, state)
    return Object.freeze(nextState)
}

export default app
