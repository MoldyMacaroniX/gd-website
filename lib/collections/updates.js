module.exports = (coll) => {
    const posts = [...coll.getFilteredByGlob('src/updates/*.md')];

    return posts.reverse();
};