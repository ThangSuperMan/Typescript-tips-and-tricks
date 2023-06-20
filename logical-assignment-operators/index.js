var articles = {
    title: "Hello",
    created_at: null,
};
articles.created_at || (articles.created_at = new Date());
console.log("articles.created_at :>> ", articles.created_at);
