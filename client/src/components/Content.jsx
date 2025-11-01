import { useEffect, useState } from "react";
import Post from "../features/Post";

export default function Content() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("http://localhost:5000/api/posts");
            const result = await response.json();
            setPosts(result);
        }

        try {
            fetchPosts();
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <main>
            <div id="content-container">
                
                <h1>Bran Castle Blog</h1>

                {posts.map((post, index, arr) => 
                    <Post key={index} title={post.title}
                        content={post.content}
                        author={post.author.name}
                        timestamp={post.created_at}
                    />
                )}
            </div>
        </main>
    );
}