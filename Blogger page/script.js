document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    const postsSection = document.getElementById('posts');
    let posts = [];

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        const newPost = { title, content };
        posts.push(newPost);
        displayPosts();
        
        postForm.reset();
    });

    function displayPosts() {
        postsSection.innerHTML = ''; // Clear previous posts
        posts.forEach((post, index) => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
            postsSection.appendChild(postDiv);
        });
    }
});
