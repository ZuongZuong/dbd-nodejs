const readline = require('readline-sync');

var BASE_URL = "https://jsonplaceholder.typicode.com/posts";

menubar();

function menubar() {
    console.log('1. Get all posts from a user');
    console.log('2. Get post content');
    console.log('0. Exit');
    var choice = Number(readline.question('Choose an option: '));
    choose(choice)
};

function choose(choice) {
    switch (choice) {
        case 1:
            getPosts();
            break;
        case 2:
            getAllPostContent();
            break;
        case 0:
            console.log('Goodbye!');
            break;
        default:
            console.log('Invalid choice');
            break;
    }
}

async function getPosts() {
    var userId = Number(readline.question('Enter User id: '));
    var postId = Number(readline.question('Enter Post id: '));
    const response = await fetch(BASE_URL);
    const data = await response.json();
    var posts = data.filter(function (post) {
        return post.userId == userId && post.id == postId;
    });
    console.log(posts);
    menubar();
}

async function getAllPostContent() {
    var userId = Number(readline.question('Enter User id: '));
    const response = await fetch(BASE_URL);
    const data = await response.json();
    var posts = data.filter(function (post) {
        return post.userId == userId;
    });
    console.log(posts);
    menubar();
}