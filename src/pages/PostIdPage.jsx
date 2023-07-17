import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/ui/loader/Loader';


const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostId, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data);
    })


    useEffect(() => {
        fetchPostId(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h1>{params.id} post is open.</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>
            }
            <h1>
                Comments:
            </h1>
            {isComLoading
                ? <Loader/>
                : <div>
                {comments.map(comm =>
                    <div key={comm.id} style={{marginTop: 15}}>
                        <h5>{comm.email}</h5>
                        <div>{comm.body}</div>
                    </div>
                )}
            </div>
        }
    </div>
);
};

export default PostIdPage;