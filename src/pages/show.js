// show.js

import { useLoaderData, Form } from "react-router-dom";

const Show = () => {
    const bookmark = useLoaderData();
    console.log(bookmark);

    return (
        <div className="bookmark">


            <h2>Update {bookmark.title}</h2>
            <Form action={`/update/${bookmark._id}`} method='post'>
                <input type='input' name='title' placeholder="Bookmark title" defaultValue={bookmark.title} />
                <input type='input' name='url' placeholder="Bookmark URL" defaultValue={bookmark.url} />
                <input type='submit' value={`Update ${bookmark.title}`} />
            </Form>

            <h2>Delete {bookmark.title}</h2>
            <Form action={`/delete/${bookmark._id}`} method='post'>
                <input type='submit' value={`Delete ${bookmark.title}`} />
            </Form>
        </div>
    )
}

export default Show;
