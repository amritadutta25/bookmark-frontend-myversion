import { Link, useLoaderData, Form } from "react-router-dom";

const Landing = () => {
    const bookmarks = useLoaderData();
    console.log(bookmarks);

    return (
        <div>
            <h3>Create a bookmark</h3>
            <Form action='/create' method='post'>
                <input type='input' name='title' placeholder="Bookmark title"/>
                <input type='input' name='url' placeholder="Bookmark URL" />
                <input type='submit' value={'Create Bookmark'} />
            </Form>

            <h3>Bookmarks</h3>
            {bookmarks.map(bookmark => {
                return (
                    <div key={bookmark._id} className="bookmark">
                        <Link to={`/${bookmark._id}`}>
                            <h1>{bookmark.title}</h1>
                        </Link>
                        <a href={bookmark.url} target="_blank" rel="noreferrer">{bookmark.url}</a>
                    </div>
                )
            })}
        </div>

    )
}

export default Landing;
