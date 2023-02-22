import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    return ( 
        <div className="create">
            <h2>You may begin...</h2>
            <form action="">
                <label >Blog title:</label>
                <input type="text" 
                required
                value={title} 
                onChange = {(e) => setTitle(e.target.value)}/>
                <label >Blog body:</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label >Blog author:</label>
                <select>
                    <option value="Charry">Charry</option>
                    <option value="Tarry">Tarry</option>
                </select>
                <button>ADD BLOG</button>
            </form>
        </div>
     );
}
 
export default Create;