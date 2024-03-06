import { useLoaderData, Form } from "react-router-dom";
import { useState, useEffect } from "react";
import View from "../components/View";
import Update from "../components/Update"
import { bookmarksLoader } from "../loaders";

const Landing = () => {
    const [bookmarks, setBookmarks] = useState(useLoaderData());
    const [isBookmarkId, setBookmarkId] = useState(null)
    const [isDeleted, setIsDeleted] = useState(null)
    const [isCreated, setIsCreated] = useState(null)

    // If you have a loader function that fetches data for your route, it will typically run:
// 1. When the component is first rendered (or when the route is first matched).
// 2. When route parameters change (for example, if your route is /items/:id and the id parameter changes).
// State variables that are internal to the component and do not affect the route parameters will not trigger the loader function to run again. React Router's data loading mechanisms are primarily focused on the initial data fetch based on the current route, not on internal component state changes.

// If you need to fetch data or perform some action in response to changes in internal component state, you would typically handle that separately from the route loader, using React's useEffect hook or similar mechanisms.
    useEffect(() => {
        // Wrap  your loader function inside async function since you can't make async function call directly inside useEffect
        const reloadBookmarks = async () => {
            const updatedBookmarks = await bookmarksLoader()
            setBookmarks(updatedBookmarks)
        }
        reloadBookmarks()

        // if a bookmark is deleted or created, reload the bookmark list and set isDeleted  or isCreated to false
        if (isDeleted) {
            setIsDeleted(false)
        }
        else if (isCreated) {
            setIsCreated(false)
        }

      }, [isBookmarkId, isDeleted, isCreated]); 

    function handleCreate()
    {
        setIsCreated(true)
    }

    function handletoUpdate(bookmark) {
        setBookmarkId(bookmark._id)
    }

    async function handledoneUpdate() {

        const updatedBookmarks = await bookmarksLoader()
        setBookmarks(updatedBookmarks)

        // changing it back to null to re-render view card
        setBookmarkId(null)
    }

    function handleDelete()
    {
        setIsDeleted(true)
    }

    return (
        <div className='bookmark-app'>
            <h3>Create a bookmark</h3>
            <Form action='/create' method='post' onClick={handleCreate}>
                <input type='input' name='title' placeholder="Bookmark title"/>
                <input type='input' name='url' placeholder="Bookmark URL" />
                <input type='submit' value={'Create Bookmark'} />
            </Form>

            <h3>Bookmarks</h3>

            <div className='bookmark-container'>
                {bookmarks.map(bookmark => {
                return (
                    <div key={bookmark._id} className="bookmark">
                    
                    {/* to toggle the bookmark card to view and update, using state variable isBookmarkId. Initially when isBookmarkId = null, the condition isBookmarkId !== bookmark._id is false for all bookmark cards. 
                    When we click the 'pencil'/update button in the 'View' component, it called handletoUpdate() function which changes the state variable to the bookmark_id whose update button was clicked. 
                    So now since state varibale is updated, this index.js page re-renders and now for that particular card whose update button was clicked isBookmarkId !== bookmark._id becomes true and hence for that card only we see the 'Update' component */}
                    { isBookmarkId !== bookmark._id ? <View bookmark={bookmark} handletoUpdate={handletoUpdate} handleDelete={handleDelete}/> : <Update bookmark={bookmark} handledoneUpdate={handledoneUpdate}/> }

                    </div>
                    )
                })}
            </div>
            
            
        </div>

    )
}

export default Landing;
