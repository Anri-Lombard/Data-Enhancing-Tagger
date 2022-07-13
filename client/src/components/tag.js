import React from 'react';

const Tag = React.memo((props) => {
    return (
        <div>
            <div>
                <p className="paragraph"><u>Description</u>: {props.tag.description}</p>
                <p className="paragraph"><u>Current Category</u>: {props.tag.category}</p>
                <p className="paragraph"><u>Number of Users Who Tagged</u>: {props.tag.usersTagged === undefined || props.tag.usersTagged === null ? "No One" : props.tag.usersTagged.length}</p>
                <p className="paragraph"><u>User Categories</u>: {props.tag.userCategories === undefined || props.tag.userCategories === null ? "No Categories" : props.tag.userCategories}</p>
            </div>
        </div>
    )
})

export default Tag;