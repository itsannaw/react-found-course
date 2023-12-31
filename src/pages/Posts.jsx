import React, { useState, useEffect } from "react";
import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import { getPageCount } from "../utils/pages";
import MyButton from "../components/ui/button/MyButton";
import MyModal from "../components/ui/MyModal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Loader from "../components/ui/loader/Loader";
import PostList from "../components/PostList";
import Pagination from "../components/ui/pagination/Pagination";


function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  
  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit));
  })

  useEffect(() => {
      fetchPosts(limit, page)
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  //получаем пост из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
  }


      return (
        <div className="App">
          <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
              Create a post
          </MyButton>
          <MyModal visible={modal} setVisible={setModal}>
              <PostForm create={createPost}/>
          </MyModal>
        
         <hr style={{margin: '15px 0'}}/>
          <PostFilter 
              filter={filter}
              setFilter={setFilter}
          />
          {postError &&
              <h1>An error has occurred ${postError}</h1>    
          }
          {isPostsLoading
              ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
              : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='News Feed'/>
          }
          <Pagination 
              page={page} 
              changePage={changePage} 
              totalPages={totalPages} 
              />
        </div>
        
      );
    }

  export default Posts;
