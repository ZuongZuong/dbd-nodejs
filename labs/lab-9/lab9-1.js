const readline = require('readline-sync');

var BASE_URL = "https://jsonplaceholder.typicode.com/posts";

menubar();

function menubar(){
    console.log('1. Get all posts from a user');
    console.log('2. Get post content');
    console.log('0. Exit');
    choose(Number(readline.question('Choose an option: ')))
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


function getPosts() {
    var userId = Number(readline.question('Enter User id: '));
    var postId = Number(readline.question('Enter Post id: '));
    fetch(BASE_URL)
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        var posts = data.filter(function(post) {
           if (post.userId == userId && post.id == postId) {
               return post;
            };
        });
        console.log(posts);
        menubar();
    });
}

function getAllPostContent() {
    var userId = Number(readline.question('Enter User id: '));
    fetch(BASE_URL)
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        var posts = data.filter(function(post) {
            if (post.userId == userId) {
                return post;
            };
        });
        console.log(posts);
        menubar();
    });
}