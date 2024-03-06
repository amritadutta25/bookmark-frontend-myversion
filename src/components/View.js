import { Form } from "react-router-dom"

const View = ({bookmark, handletoUpdate, handleDelete}) => {
    
    return (
            <div>
                <a href={bookmark.url} target="_blank" rel="noreferrer">{bookmark.title}</a>
                <div className='update-delete'>
                    <button className="update-button" 
                        onClick={ () => handletoUpdate(bookmark)}>
                        <i className="fa-solid fa-pencil"></i>
                    </button>
                        
                    <Form action={`/delete/${bookmark._id}`} method='post'>
                        <button className="delete-button"><i className="fa-solid fa-trash" onClick={handleDelete}></i></button>
                        {/* The <button> inside the <Form> is implicitly of type="submit" because no other type is specified. So, when this button is clicked, it submits the form. */}
                    </Form>
                </div>
            
            </div>
         )
}

export default View