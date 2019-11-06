
module.exports = {
    //get All,
    // getById,
    getPosts
}

function getPosts(userId) {
    return posts('posts as p')
    .join('users as u', 'u.id', 'p.user_id')
    .select('p.id', 'u.username', 'p.contents')
    .where({ 'u.id': userId });
}

// // function update(changes, id) {
// //     return db('users')
// //     .where({ id })
// //     .update({ changes })
// //     .then(count => {
// //         return getbyId
// //     })
// }
