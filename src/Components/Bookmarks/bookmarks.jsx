import PropTypes from 'prop-types'; 
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    // let newReadingTime=0;
    // bookmarks.forEach(bm=> newReadingTime= newReadingTime + parseInt(bm.reading_time))
    // console.log(newReadingTime);
    return (
        <div className="w-1/3 bg-gray-300 p-4 rounded-xl">

            <h3 className='px-4 py-3 text-center border rounded-xl mb-4 text-xl font-medium '>Spent time on read : {readingTime}</h3>

            <h3 className='mb-3 text-2xl font-semibold'>Bookmarked Blogs: {bookmarks.length}</h3>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark} ></Bookmark> )
            }

        </div>
    );
};

Bookmarks.propTypes = {
  
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}
export default Bookmarks;