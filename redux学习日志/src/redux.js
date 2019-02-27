// store  数据
const person = {
    name: 'nick',
    age: 18
}

//这是同步action
// const increase = {
//     type: 'add'
// }
// const decrease = {
//     type: 'minus'
// }

//这是reducer
const reducer = (state = person, action) => {
    switch (action.type) {
        case 'add':
        // 返回新的 state tree
            return Object.assign({}, state, state.age += 1);
        case 'minus':
            return Object.assign({}, state, state.age -= 1);
        default:
            return state;
    }
}
export default reducer