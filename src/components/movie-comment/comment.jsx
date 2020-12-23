import React from 'react'
import Moment from 'react-moment';


const MovieComment = ({comment}) => {
    const {username, commentText, createdAt} = comment;
    return (
        <div className="comment">
            <h3 className="heading-secondary">{username}</h3>
            <h5>
            <Moment format="MM-DD-YYYYTH:mm" parse="YYYY-MM-DD HH:mm">{createdAt}
            </Moment></h5>
            <p className="comment__text">{commentText}</p>
        </div>
    )
} 

export default MovieComment;