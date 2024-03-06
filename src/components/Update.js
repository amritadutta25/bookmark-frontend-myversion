import { Form } from 'react-router-dom';

const URL = process.env.REACT_APP_URL;

const Update = ({bookmark, handledoneUpdate}) => {

    // the function to run on form submission
  const handleSubmit = async (event) => {

    // prevent default begavious of form submission
    event.preventDefault();

    // in actions.js updateAction() function was executed after a http request was sent through the Router in router.js and hence we were using request.formData() to get the updated data.
    // but the way it is done inside here in the handleSubmit() function, formdata is being retrieved from the DOM using event.target, and hence, here we are using FormData(event.target)
    // so in short, getting the formdata differs if we are getiing the form submission as a http request (as seen through the update route in Router.js) or through a DOM event (here onSubmit)
    const formData = new FormData(event.target);
    const updatedBookmark = {
        title: formData.get('title'),
        url: formData.get('url'),
    };

    // Use `fetch` to send data to the server
    await fetch(`${URL}/bookmark/${bookmark._id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedBookmark)
    });

    // to reset state variable to null, so that the bookmark card goes back to view side
    handledoneUpdate()

    // can be done directly here by passing the two set functions as props from index.js component instead of executing handledoneUpdate()
    // const updatedBookmarks = await bookmarksLoader()
    // setBookmarks(updatedBookmarks)
    // setBookmarkId(null) // changing it back to null to re-render view card

  }

    return (
        <div className="bookmark">
            <Form  onSubmit={handleSubmit}> 
            {/* using onSubmit to have more control over actions following form submission and not just traditional HTML form submission */}
                <input type='input' name='title' placeholder="Bookmark title" defaultValue={bookmark.title} />
                <input type='input' name='url' placeholder="Bookmark URL" defaultValue={bookmark.url} />
                <input type='submit' value={`Update`} />
            </Form>

        </div>

    )
}

export default Update;
