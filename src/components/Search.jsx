import React, { useContext, useState } from 'react'
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';

  const Search = () => {
  const [userName, setUserName] = useState("")
  const [user, setUser] = useState(null)
  const [err, setEr] = useState(false)
  const {currentUser} = useContext(AuthContext)


  const handleSearch = async () => {
    const q = query(collection(db, "users"),
     where("displayName", "==", userName));
try{
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    setUser(doc.data())
    });
  }catch(err){
    setEr(true)
  }
  };

  const handleKey = (e)=>{
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () =>{
   
const  compinedId = currentUser.uid > user.uid 
? currentUser.uid + user.uid 
: user.uid + currentUser.uid;

try{
const res = await getDoc(doc(db, "chats", compinedId));

//create a chat in chats collection
if(!res.exists()) {
  await setDoc(doc(db, "chats", compinedId), {messages: [] });

  //create user chats

  await updateDoc(doc(db, "userChat", currentUser.uid ), {
    [compinedId + ".userInfo"]: {
      uid: user.uid, 
      displayName: user.displayName,
      photoURL: user.photoURL,
    },
    [compinedId + ".date"]: serverTimestamp()
  });

  await updateDoc(doc(db, "userChat", user.uid ), {
    [compinedId + ".userInfo"]:{
      uid:currentUser.uid,
      displayName: currentUser.displayName,
      photoURL: currentUser.photoURL
    },
    [compinedId + ".date"]: serverTimestamp()
  });
}

}catch(err){}
setUser(null);
setUserName("");
  }

  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text'placeholder='Find a User'onKeyDown={handleKey}
         onChange={(e)=>setUserName(e.target.value)} value={userName}/>
      </div>
      {err && <span>User not found!</span>}
      {user &&
      <div className='searchChat' onClick={handleSelect}>
      <img src={user.photoURL} alt="" />
        <div className='searchChatInfo'>
       <span>{user.displayName}</span>
        </div>
      </div> 
  }
    </div>
  )
}

export default Search