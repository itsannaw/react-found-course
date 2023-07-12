import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';

const AppRouter = () => {
    return (
        <div>    
      <Routes>
          <Route path='/about' element={<About/>} />
          <Route path='/posts' element={<Posts/>} />
          <Route path='/posts/:id' element={<PostIdPage/>} />
          <Route path = '/error' element={<Error/>}/>
          <Route path = '*' element={<Navigate to='/error' replace/>}/>
      </Routes> 
        </div>
    );
};

export default AppRouter;