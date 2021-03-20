import React, {useState, useEffect} from 'react';
import CardPost from "./CardPost";
import {Box, Grid} from "@material-ui/core";
import {Skeleton} from "@material-ui/lab";

export default function Posts(){

    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        fetch('http://localhost:1337/posts',
            {
                method: 'get',
                headers: {
                    'Accept': 'Application/json'
                }
            })
            .then(res => res.json())
            .then(response => {
                setTimeout(() => {
                    setPosts(response)
                    setIsLoading(false)
                }, 2000)
            })
    }, [])

    return(
        <div className="posts">
            <h1>Liste des articles</h1>
            <Grid container spacing={3}>
                {isLoading ? (
                    <Box>
                        <Skeleton variant="rect" width={210} height={180} />
                        <Skeleton width = "60%" />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </Box>
                ) : posts.map(post => <CardPost post={post} key={post.id}/>)}
            </Grid>
        </div>

    )
}
