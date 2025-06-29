import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';
import Login from './views/Login/Login';
import SignUp from './views/SignUp/SignUp';
import Account from './views/Account/Account';
import PostList from './views/Post/PostList/PostList';
import WritePost from './views/Post/WritePost/WritePost';
import ViewPost from './views/Post/ViewPost/ViewPost';
import UpdatePost from './views/Post/UpdatePost/UpdatePost';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: 'profile', element: <Profile />},
            { path: 'login', element: <Login />},
            { path: 'signup', element: <SignUp />},
            { path: 'account', element: <Account />},
            { path: 'postlist', element: <PostList />},
            { path: 'writepost', element: <WritePost />},
            { path: 'viewpost/:id', element: <ViewPost /> },
            { path: 'updatepost/:id', element: <UpdatePost />},
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

reportWebVitals();