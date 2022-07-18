import React from 'react';
import "../css/tag.css"

const Tag = React.memo((props) => {
    return (
        <div className="description-box">
            <h3 className="description-box-heading">Details</h3>
            <div className="description-box-text">
                
                {
                    props.tag === null ? 
                    <p>No data left to tag</p> :
                    <>
                        <p><u className="highlight">Description:</u> {props.tag.description}</p>
                        <p><u>Current Category:</u> {props.tag.category}</p>
                        <p><u>Number of Users Who Tagged:</u> {props.tag.usersTagged === undefined || props.tag.usersTagged === null ? "No One" : props.tag.usersTagged.length}</p>
                        <p><u>User Categories:</u> {props.tag.userCategories === undefined || props.tag.userCategories === null ? "No Categories" : props.tag.userCategories}</p>
                        </>
                }
            </div>
        </div>
    )
})

export default Tag;