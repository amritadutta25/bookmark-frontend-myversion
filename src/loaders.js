const URL = process.env.REACT_APP_URL;

export const bookmarksLoader = async () => {
    const response = await fetch(`${URL}/bookmark`);
    const bookmarks = await response.json();
    return bookmarks;
}

export const bookmarkLoader = async ({params}) => {
    const response = await fetch(`${URL}/bookmark/${params.id}`);
    const bookmark = await response.json();
    return bookmark;
}
