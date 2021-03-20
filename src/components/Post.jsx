import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {API_URL} from "../config";

export default function Post(){

    const {id} = useParams()
    let[postState, setPost] = useState(null)
    let [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetch(`${API_URL}/posts/${id}`)
            .then(res => res.json())
            .then(res => {
                setPost(res)
                setIsLoading(true)
            })
    })

    return(
        <div>
            <h1>{isLoading ? postState.title : "Loading..."}</h1>
        </div>
    )
}
