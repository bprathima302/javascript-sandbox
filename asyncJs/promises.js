const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'},
];

function getPosts(value){
    setTimeout(()=> {
        let output = '';
        posts.forEach((post, index)=> {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
    console.log(value)
}

function createPost(post){
 return new Promise((resolve, reject)=> {
    setTimeout(()=> {
        posts.push(post);
        const error = false;
        if(!error){
            resolve({title: 'Post Three', body: 'This is post three'});
        }else{
            reject('Error: Something went wrong');
        }
    }, 2000)
 })
}
createPost({ title: 'Post Three', body: 'This is post three'}).then(getPosts);