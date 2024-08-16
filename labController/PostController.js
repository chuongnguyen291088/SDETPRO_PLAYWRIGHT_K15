const Post = require("../labEntity/Post");

class PostController {

    constructor(host, slug) {
        this.url = `${host}${slug}`;
    }

    // service method
    async getAllPostsByUserId(userId) {
        const allPosts = await this._getAllPosts();
        return allPosts.filter((post) => {
            return post._userId === userId;
        });
    };
    
    // service method
    async getPostByUserIdAndPostId(userId, postId) {
        const allPostByUserId = await this.getAllPostsByUserId(userId);
        return allPostByUserId.find((post) => {
            return post._id === postId;
        })
    };

    // support method
    async _getAllPosts() {
        const response = await fetch(this.url);
        const jsonResponse = await response.json();
        return jsonResponse.map((post) => {
            const {userId, id, title, body} = post;
            return new Post(userId, id, title, body);
        });
    };
}

module.exports = PostController;
