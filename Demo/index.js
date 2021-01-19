// Hoisting
// var newrate = 2.0;
// var rate = 3.0;
// function getRate() {
//   if (!rate) {
//     var rate = newrate;
//   }
//   return rate;
// }

// console.log(getRate());

console.log(a);
let a = 10;

//CALLBACK//

// const posts = [
//   { title: "Post 1", body: "This is Post 1" },
//   { title: "post 2", body: "This is post 2" },
// ];

// const getPost = () => {
//   setTimeout(() => {
//     posts.forEach((post, index) => {
//       console.log(`My post ${index + 1} ` + ": " + post.body);
//     });
//     console.log("Get Post Ends...");
//   }, 2000);
// };

// const createPost = (post, callback) => {
//   setTimeout(() => {
//     callback();
//     posts.push(post);
//     console.log("Create Post Ends...");
//   }, 1000);
// };

// createPost({ title: "Post 3", body: "This is post 3" }, getPost);

// //Promise
// const createPostPromise = (post) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       resolve();
//       console.log("Create Post Ends...");
//     }, 1000);
//   });
// };
// createPostPromise({ title: "Post 4", body: "This is post 4" }).then(getPost);