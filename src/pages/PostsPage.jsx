import React, {useState, useEffect} from 'react';
import CardPost from "../components/CardPost";
import {Grid} from "@material-ui/core";
import PostsContentLoader from "../components/loaders/PostsContentLoader";
import PostsAPI from "../services/postsAPI";

export default function PostsPage(){

    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState(null)

    useEffect( () => {
        fetchAllPosts();
    }, []);

    const fetchAllPosts = async () => {
        const data = await PostsAPI.findAll();
        setPosts(data);
        setIsLoading(false);
    };

    return(
        <div className="posts">
            <h1>Liste des articles</h1>
            <Grid container spacing={3}>
                {isLoading ? (
                    <PostsContentLoader />
                ) : posts.map(post => <CardPost post={post} key={post.id}/>)}
            </Grid>
        </div>

    )
}
