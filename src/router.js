// router.js

import {
    createBrowserRouter, 
    createRoutesFromElements, 
    Route 
} from 'react-router-dom';
import App from './App';
import Landing from './pages/index';
import Show from './pages/show';
import { bookmarksLoader, bookmarkLoader } from './loaders'; 
import { updateAction, createAction, deleteAction } from './actions';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App /> }>
            <Route path='' element={<Landing/>} loader={bookmarksLoader}/>
            <Route path=':id' element={<Show/>} loader={bookmarkLoader}/>
            <Route path='create' action={createAction}/>
            <Route path='update/:id' action={updateAction}/> 
            <Route path='delete/:id' action={deleteAction}/>  
        </Route>
    )
)

export default router;