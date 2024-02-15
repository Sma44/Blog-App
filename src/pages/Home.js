import React, { useState, useEffect} from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Home({isAuth}){

    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");
    const admin = "xAJpOivKKLguoafdQ6gP7PKwRrQ2";

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
      };

    useEffect(() => {
        const getPosts = async () => {
          const data = await getDocs(postsCollectionRef);
          setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPosts();
      }, [deletePost]);

    
    // coments for the return code are outside as to not create errors
    return (
    <div className="homePage"> {postLists.map((post) => { 
        return (
            <div className="post">
                <div className="postHeader">
                    <div className="title">
                        <h1> {post.title}</h1>
                    </div>

                    <div className="deletePost">
                    {isAuth && (post.author.id === auth.currentUser.uid || auth.currentUser.uid === admin) && (
                        <button onClick={() => {deletePost(post.id);}}>Delete Post: X </button>
                    )}

                    </div>
                </div>
                
                <div className="postTextContainer"> {post.postText}</div>
                <h3>@{post.author.name}</h3>
            </div>
        );
        })}
    </div>
    );
}

export default Home;