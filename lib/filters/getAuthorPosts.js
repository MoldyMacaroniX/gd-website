module.exports = (posts,author) => {
    // let authorp = authors.filter(a => a.key === label)[0];
    // let apost = posts.filter(a => a.data.author === authorp);
    // return apost;
    return posts.filter(p => {
		if(!p.data.author) return false;
		let authors = p.data.author.split(',');
		return authors.includes(author);
	});
};