import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Error from '../pages/Error';
import { router } from '../router/router';

const AppRouter = () => {
    return (
        <div>    
      <Routes>
      {router.map(route =>
        <Route key={route.path}
           element={<route.component/>}
           path={route.path}
           exact={route.exact}
    />
)}
        <Route path='/error' element={<Error/>}/>
        <Route path='/*' element={<Navigate to='/error' replace/>}/>
      </Routes> 
        </div>
    );
};

export default AppRouter;