import './App.css'

import Nav from './Components/header/Nav';
import Bookmarks from './Components/Bookmarks/bookmarks';
import Blogs from './Components/Blogs/Blogs';
import { useState } from 'react';



function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime , setReadingtime] = useState(0);
   
  const handleBookmark = (blog) =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    
  }

  const handleReadingTime = (time,id) => {
 
    setReadingtime(readingTime+time);

    // remove the bookmark of mark as read
    const remainingBookmarks = bookmarks.filter((bookmark)=> bookmark.id !=id)
    setBookmarks(remainingBookmarks);
  }

  return (
    
    <> 
      <Nav></Nav>
       <div className='flex gap-8 mt-8 w-5/6 mx-auto '>
       <Blogs handleBookmark = {handleBookmark} handleReadingTime={handleReadingTime}></Blogs>
       <Bookmarks readingTime={readingTime} bookmarks={bookmarks} ></Bookmarks>
       </div>
       
    
    
      
      
    </>
  )
}

export default App
