function friend(friends){
  const realFriends = []
  for(let friend of friends) {
    if (friend.length === 4) {
      realFriends.push(friend)
    }
  }
  return realFriends;
}