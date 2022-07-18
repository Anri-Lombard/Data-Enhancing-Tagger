import React from 'react';

const TagRadios = (props) => {
    let visibleOptions = props.visibleOptions;

    if (props.tagToUpdate !== null) {
        const userCategoriesArray = props.tagToUpdate.userCategories;
        
        if (userCategoriesArray !== undefined) {
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
            {visibleOptions && visibleOptions.length > 0 ? (
            visibleOptions.map((option) => (
                <li key={option}>
                <input
                    className="btn btn-check"
                    type="radio" id={option}
                    name="tag" autoComplete="off"
                    value={option}
                    onChange={props.onChangeHandler}
                />
                <label className="btn btn-outline-primary" htmlFor={option}>{option}
                </label>
                </li>
            ))
            ) : (
            <p className ="Results_found">No results found!</p>
            )}
        </ul>
    )
};

export default TagRadios;