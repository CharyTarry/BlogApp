import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, error, isPending } = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory(); 


    const handleClick= () => {
        fetch(`http://localhost:8000/blogs/${blog.id}`, { 
           method:'DELETE'
        } ).then(() => {
            history.push('/');
        })
    }

    const renderBody = (body) => {
        const paragraphs = body.split("\n\n");
        return paragraphs.map((paragraph, index) => {
            const lines = paragraph.split("\n");
            return (
                <div key={index}>
                    {lines.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
            );
        });
    };

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h3>{ blog.title }</h3>
                    <p>Written by { blog.author } </p>
                    <div>{renderBody(blog.body)}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;
