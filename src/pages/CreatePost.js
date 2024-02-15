import React, { useState, useEffect} from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";


function CreatePost({isAuth}){

    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");
    const postsCollectionRef = collection(db, "posts");
    let navigate = useNavigate();

    const createpost = async () => {
        await addDoc(postsCollectionRef, {
            title, 
            postText, 
            author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}
        });
        navigate("/");
    }
    

    useEffect(() => {
        if (!isAuth){
            navigate("/login");  
        }

    }, []);


    return (
        <div className='createPostPage'>
            <div className="cContainer">
                <h1>Create Your Post Here</h1>
                <div className="inputp">
                    <label> Name Your Post:</label>

                    <input placeholder="Your Title..." onChange={(event) => {setTitle(event.target.value)}}></input>
                </div>
                <div className="inputp">

                    <label> Type Your Post Here:</label>
                    <textarea placeholder="Your Post..." onChange={(event) => {setPostText(event.target.value)}}/>
                </div>
                <button onClick={createpost}> Submit Your Post</button>
            </div>
        </div>
        );
}

export default CreatePost;