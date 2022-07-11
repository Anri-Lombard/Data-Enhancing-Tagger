export default function TagRadios(props) {
    return (
        <div className="user-list">
            {props.visibleOptions && props.visibleOptions.length > 0 ? (
            props.visibleOptions.map((option) => (
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
        </div>
    )
}