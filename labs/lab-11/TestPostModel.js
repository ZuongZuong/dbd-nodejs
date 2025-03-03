const Post = require("./Post");
const RequestHandler = require("./RequestHandler");

// Excution
lab11();

// Function Declaration
async function lab11() {
    // Given params
    const userId = 1;
    const postId = 5;

    // Create RequestHandler object
    const requestHandler = new RequestHandler("https://jsonplaceholder.typicode.com/posts");
    let printTargetPost = await requestHandler.printTargetPost(userId, postId);
    console.log(printTargetPost);

    let printAllPosts = await requestHandler.printAllPosts(userId);
    console.log(printAllPosts);

    let getAllPost = await requestHandler._getAllPosts(userId);
    console.log(getAllPost);
}