import React, { useState } from 'react';
import MyInput from './ui/input/MyInput';
import MyButton from './ui/button/MyButton';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''}) 

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title:'', body:''})
      }


    return (
           <form>
            {/*Управляемый компонент*/}
            <MyInput 
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text" 
                placeholder="Title of the post"/>
            <MyInput 
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text" 
                placeholder="Description of the post"/>
            <MyButton onClick={addNewPost}>Create a post</MyButton>
          </form>  
    );
};

export default PostForm;