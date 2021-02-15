export default (action, state={}) => {
    
    switch('type'){
        case 'SET_DATA':
            return action.ntare
        default:
            return state
    }
}