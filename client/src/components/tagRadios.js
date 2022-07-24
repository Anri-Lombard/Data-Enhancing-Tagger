import React from 'react';
import '../css/tagRadios.css';

const TagRadios = (props) => {
    let visibleOptions = props.visibleOptions;
    let userCategoriesArray = [];

    if (props.tagToUpdate !== null) {
        
        if (props.tagToUpdate.userCategories !== undefined) {
            userCategoriesArray = props.tagToUpdate.userCategories;
            if (userCategoriesArray.length === 2) {
                if (userCategoriesArray[0] !== userCategoriesArray[1]) {
                    // Decision state
                    visibleOptions = [userCategoriesArray[0], userCategoriesArray[1]]
                }
            }
        }
    } else {
        visibleOptions = []
    }

    return (
        <ul className="user-list">
            {userCategoriesArray.length === 2 ? <div style={{
                fontWeight: "300", 
                fontSize: "20px", 
                textAlign: "center"
            }}>Double Tap Submission Dissabled</div> : null}
            {visibleOptions && visibleOptions.length > 0 ? (
                visibleOptions.map((option) => (
                    <li key={option}>
                        <input
                            className="btn btn-check"
                            type="radio" 
                            id={option}
                            name="tag" 
                            autoComplete="off"
                            value={option}
                            onChange={props.onChangeHandler}
                        />
                        <label className="btn btn-outline-primary" htmlFor={option}>{option}
                        </label>
                    </li>
                ))
            ) : (
                <h5 className="Results_found">No results found!</h5>
            )}
        </ul>
    )
};

export default TagRadios;