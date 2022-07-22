import React from 'react';
import "../css/tag.css"

const Tag = React.memo((props) => {
    return (
        <div className="description-box">
            <h3 className="description-box-heading"><span>Information</span></h3>
            <div className="description-box-text">
                {
                    props.tag === null ?
                        <p className="highlight">No data left to tag</p> :
                        <>
                            <p><u>Description:</u> {props.tag.description}</p>
                            <p><u>Balance:</u> {props.tag.balance === undefined || props.tag.balance === null ? "Zero" : props.tag.balance}</p>
                            <p><u>Date:</u> {props.tag.date === undefined || props.tag.date === null ? "Unknown Date" : props.tag.date}</p>
                            <p><u>Current Category:</u> {props.tag.category}</p>
                        </>
                }
            </div>
        </div>
    )
})

export default Tag;