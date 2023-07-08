import React, { useMemo, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/ui/button/MyButton";
import MyInput from "./components/ui/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/ui/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/ui/MyModal/MyModal";


function App() {
  const [posts, setPosts] = useState([
        {id: 1, title: 'bbb', body: 'Description'},
        {id: 2, title: 'aaa', body: 'Description'},
        {id: 3, title: 'jjjj', body: 'Description'}
      ])

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)

  const sortedPosts = useMemo(() => {
    if(filter.sort) {
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  //получаем пост из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


      return (
        <div className="App">
          <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
              Создать пользователя
          </MyButton>
          <MyModal visible={modal} setVisible={setModal}>
              <PostForm create={createPost}/>
          </MyModal>
         

         <hr style={{margin: '15px 0'}}/>
          <PostFilter 
              filter={filter}
              setFilter={setFilter}
          />
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Посты про JS'/>
        </div>
      );
    }

  export default App;
