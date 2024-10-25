import PropTypes from 'prop-types'; 

const Bookmark = ({bookmark}) => {
    return (
        <div >
            <h3 className='p-3 font-semibold border rounded-xl mb-3 bg-slate-200'>{bookmark.title}</h3>
        </div>
    );
};


Bookmark.propTypes = {
  
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;