const { Post } = require("./Post");

class RequestHandler {

    constructor(url) {
        this._url = url
    }

    async getResponse() {
        const response = await fetch(this._url);
        return await response.json();
    }

    async printTargetPost(userId, postId) {
        // Construct the returned data as a Post data model from class Post
        let temp
        const data = await this.getResponse();
        let posts = await data.filter(function (post) {
            if (post.userId === userId && post.id === postId) {
                temp = new Post(post.userId, post.id, post.title, post.body);
            }
        });
        return temp;
    }

    async printAllPosts(userId) {
        // Construct the returned data as a [ Post data model ] from class Post
        let temp = []
        const data = await this.getResponse();
        let posts = data.filter(function (post) {
            if (post.userId === userId) {
                temp.push(new Post(post.userId, post.id, post.title, post.body));
            }
        });
        return temp;
    }

    async _getAllPosts(userId) {
        // Get all posts from the API
        let posts = []
        const data = await this.getResponse();
        for (let post of data) {
            posts.push(new Post(post.userId, post.id, post.title, post.body));
        }
        return posts;
    }

}

module.exports = RequestHandler;