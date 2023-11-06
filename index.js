const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        avatarAlt: "Vincent van Gogh in formal attire",
        post: "images/post-vangogh.jpg",
        postAlt: "Self-portrait of Vincent van Gogh, a famous painting by the artist himself, capturing his unique style",
        caption: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        avatarAlt: "An aged photograph featuring Gustave Courbet, a bearded man, captured in black and white",
        post: "images/post-courbet.jpg",
        postAlt: "Self-portrait of Gustave Courbet, depicting a man with his head in his hands",
        caption: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        avatarAlt: "Joseph Ducreux self-portrait of a man with finger to lips",
        post: "images/post-ducreux.jpg",
        postAlt: "A self-portrait of Joseph Ducreux, depicting a man in a hat, gesturing with a pointed finger",
        caption: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];

const postsContainerEl = document.getElementById("posts-container");

function createPostHTML(post) {
    return `
        <section>
            <div class="container">
                <div class="post-header">
                    <img class="poster-avatar" src=${post.avatar} alt=${post.avatarAlt}>
                    <div>
                        <p>${post.name}</p>
                        <p class="poster-location">${post.location}</p>
                    </div>
                </div>
                <img class="post-image" src=${post.post} alt=${post.postAlt}>
                <div class="btn-container">
                    <button type="button" aria-label="like">
                        <img class="btn-image" src="images/icon-heart.png" alt="">
                    </button>
                    <button type="button" aria-label="comment">
                        <img class="btn-image" src="images/icon-comment.png" alt="">
                    </button>
                    <button type="button" aria-label="send direct message">
                        <img class="btn-image" src="images/icon-dm.png" alt="">
                    </button>                
                </div>
                <p class="like-count">${post.likes} likes</p>
                <p class="post-caption">${post.username} <span class="caption-message">${post.caption}</span></p>
            </div>
        </section>
    `;
}

function renderPosts() {
    for (let i = 0; i < posts.length; i++) {
        const postHTML = createPostHTML(posts[i]);
        postsContainerEl.innerHTML += postHTML;
    }
}

renderPosts();