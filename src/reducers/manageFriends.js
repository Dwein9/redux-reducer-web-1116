export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
        return { ...state, friends: [...state.friends, action.payload] }
      break;
    case 'REMOVE_FRIEND':
        let updateFriends = state.friends.filter((friend) => friend.id !== action.payload)
          return { ...state, friends: updateFriends }
      break;
    default:
      return state;
  }
}
