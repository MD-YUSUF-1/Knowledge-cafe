import PropTypes from 'prop-types'; 
import { CiBookmark } from "react-icons/ci";




const Blog = ({blog,handleBookmark,handleReadingTime}) => {
    const {id,title, cover, author,hashtag,reading_time,posted_date,author_img } = blog;
    return (
        <div className='pb-6 border-b-2 mb-6 '>
            <img className='w-full pb-4' src={cover} alt="" />

            <div className='flex justify-between'>
                <div className='flex gap-3'>
                    <h3><img className='w-16' src={author_img} alt="" /></h3>
                    <div>
                        <p className='text-2xl font-semibold'>{author}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleBookmark(blog)} className='text-2xl ml-1'><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h3 className='text-4xl font-bold mt-4'>{title}</h3>

            <p className='my-4'>{hashtag.map((hash,idx)=> <a className='mx-3  text-xl' key={idx} href="">{hash}</a> )}</p>

            <button onClick={()=> handleReadingTime(reading_time,id)} className='px-8 py-4 border rounded-xl bg-purple-400 text-xl  '>Mark as Read</button>


        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}

export default Blog;