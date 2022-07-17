import React from 'react';
import "../css/tag.css"

interface TagIF {
    tag: object;
    description: string;
    category: string;
    usersTagged: string[];
    userCategories: string[];
}

const Tag: React.FC<TagIF> = React.memo((tag) => {
    return (
        <div className="description-box">
            <h3 className="description-box-heading">Details</h3>
            <div className="description-box-text">
                <p>Description: {tag.description}</p>
                <p>Current Category: {tag.category}</p>
                <p>Number of Users Who Tagged: {tag.usersTagged === undefined || tag.usersTagged === null ? "No One" : tag.usersTagged.length}</p>
                <p>User Categories: {tag.userCategories === undefined || tag.userCategories === null ? "No Categories" : tag.userCategories}</p>
            </div>
        </div>
    )
})

export default Tag;