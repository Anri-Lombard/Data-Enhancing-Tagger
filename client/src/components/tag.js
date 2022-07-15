import React from 'react';
import "../css/tag.css"

const Tag = React.memo((props) => {
    return (
        <div className="description-box">
            <h3 className="description-box-heading">Details</h3>
            <div className="description-box-text">
                <p>Description: {props.tag.description}</p>
                <p>Current Category: {props.tag.category}</p>
                <p>Number of Users Who Tagged: {props.tag.usersTagged === undefined || props.tag.usersTagged === null ? "No One" : props.tag.usersTagged.length}</p>
                <p>User Categories: {props.tag.userCategories === undefined || props.tag.userCategories === null ? "No Categories" : props.tag.userCategories}</p>
            </div>
        </div>
    )
})

export default Tag;