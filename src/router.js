// router.js

import {
    createBrowserRouter, 
    createRoutesFromElements, 
    Route 
} from 'react-router-dom';
import App from './App';
import Index from './pages/index';
import { bookmarksLoader, bookmarkLoader } from './loaders'; 
import { updateAction, createAction, deleteAction } from './actions';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App /> }>
            <Route path='' element={<Index/>} loader={bookmarksLoader}/>
            {/* <Route path=':id' element={<Update/>} loader={bookmarkLoader}/> */}
            <Route path='create' action={createAction}/>
            {/* <Route path='update/:id' action={updateAction}/>  */}
            <Route path='delete/:id' action={deleteAction}/>  
        </Route>
    )
)

export default router;
