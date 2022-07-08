import React, { useEffect, useState } from "react";
import NavBar from './navbar.js';
import Footer from './footer.js';
import '../css/tagging.css'

const PORT = 2000;

export default function Tagging({ name, user }) {
  const [tagToUpdate, setTagToUpdate] = useState({});

  // hardcoded for now
  let dataTagged = false;
  let userCategoriesArray = []
  const usersTaggedArray = new Array(user)
  let editedTag = [];
  let tagOptions = ["tagOne", "tagTwo", "tagThree", "tagFour", "tagFive"];

  // tagOptions logic
  if (userCategoriesArray !== undefined || userCategoriesArray.length >= 2) {
    if (userCategoriesArray.length === 2) {
      if (userCategoriesArray[0] !== userCategoriesArray[1]) {
        tagOptions = [userCategoriesArray[0], userCategoriesArray[1]]
      }
    }
  }
    
  const [tags, setTags] = useState([]);
  const [oneTag, setOneTag] = useState();
  const [chosenCategory, setChosenCategory] = useState("");
  // this will display the options to choose from and will be changed
  const [visibleOption, setVisibleOptions] = useState(tagOptions)
  const [query, setQuery] = useState('');

  // TODO: Add tons more options
  // the options will be outlined by Dirk 


  // TODO:
  // 1. Boolean = if 2 users tagged + 2 categories are the same, then true (tagged completely)
  //    else if 2 users tagged + 2 categories not the same, then decision state.
  // 2. Search algorithm for untagged data
  //    - If tagged by user, don't show for user.
  //    - if tagged completely, don't show to anyone.
  //    ---- Obviously, as data gets more, this can become inefficient.
  // 3. DONE SCREEN - no data to tag.
  //
  // Solution:
  // - S: findOne mongodb method for one at a time, and updateMany to tagged = false

  // filter function 
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = tagOptions.filter((option) => {
        return option.toLowerCase().includes(keyword.toLowerCase());
      });
      setVisibleOptions(results);
    } else {
      setVisibleOptions(tagOptions);
    }

    setQuery(keyword);
  };

  const Tag = (props) => (
    <div>
      <div>
        <p className="paragraph"><u>Description</u>: {props.tag.description}</p>
        <p className="paragraph"><u>Current Category</u>: {props.tag.category}</p>
        <p className="paragraph"><u>Number of Users Who Tagged</u>: {props.tag.usersTagged === undefined || props.tag.usersTagged === null ? "No One" : props.tag.usersTagged.length}</p>
        <p className="paragraph"><u>User Categories</u>: {props.tag.userCategories === undefined || props.tag.userCategories === null ? "No Categories" : props.tag.userCategories}</p>
      </div>
    </div>
  );


  async function onSubmitHandler(e) {
    e.preventDefault();
    setTimeout(() => {
      window.location.reload()
    }, 200)

    userCategoriesArray = tagToUpdate.userCategories.length === 0 ? 
                          new Array(chosenCategory) : 
                          tagToUpdate.userCategories.push(chosenCategory);

    if (userCategoriesArray !== undefined || userCategoriesArray.length >= 2) {
      if (userCategoriesArray.length === 2) {
        if (userCategoriesArray[0] !== userCategoriesArray[1]) {
          dataTagged = true;
          setChosenCategory(userCategoriesArray[1]);
        }
      } else {
        dataTagged = true;
        setChosenCategory(userCategoriesArray[2]);
      }
    }

    editedTag = {
      id: tagToUpdate.id,
      date: tagToUpdate.date,
      description: tagToUpdate.description,
      balance: tagToUpdate.balance,
      transactionValue: tagToUpdate.transactionValue,
      category: chosenCategory,
      usersTagged: usersTaggedArray,
      userCategories: userCategoriesArray,
      tagged: dataTagged
    };

    document.getElementById("tagBtn").disabled = true;

    await fetch(`http://localhost:${PORT}/update/${tagToUpdate.id}/`, {
      method: "POST",
      body: JSON.stringify(editedTag),
      headers: {
        'Content-Type': 'application/json'
      },
    });
  }

  function onChangeHandler(e) {
    setChosenCategory(e.target.value)
    document.getElementById("tagBtn").disabled = false;
  }

  function tagRadios() {
    return (
      <div className="user-list">
        {visibleOption && visibleOption.length > 0 ? (
          visibleOption.map((option) => (
            <li key={option}>
              <input
                className="btn btn-check"
                type="radio" id={option}
                name="tag" autoComplete="off"
                value={option}
                onChange={onChangeHandler}
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

  // useEffect(() => {
  //   async function getTags() {
  //     const response = await fetch(`http://localhost:${PORT}/tag/`);

  //     if (!response.ok) {
  //       const message = `An error occurred: ${response.statusText}`;
  //       window.alert(message);
  //       return;
  //     }

  //     const tags = await response.json();

  //     setTags(tags);
  //   }

  //   getTags();

  //   return;
  // }, [tags.length]);

  useEffect(() => {
    async function getOneTag() {
      const response = await fetch(`http://localhost:${PORT}/tag/one`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const tag = await response.json();

      setOneTag(tag);
    }

    getOneTag();

    
    return;
  }, []);

  useEffect(() => {
    console.log(oneTag)
    if (oneTag !== undefined && oneTag !== null) {
      setTagToUpdate(oneTag)
    }
  }, [oneTag]);
  

  // this needs to change when we implement getting single tag instead of an array
  function getSingleTag() {
    return <Tag tag={tagToUpdate} />
  }
  
  return (
    <>
      <NavBar name={name} />

      <div className="header">
        <h3>Tag Data With Following Details:</h3>

        {/* Details */}
        {getSingleTag()}

        {/* Filter */}
        <div className="form-box search-box">
          <input
            type="search"
            value={query}
            onChange={filter}
            className="input form-control"
            placeholder="Search"
            autoFocus
          />
        </div>

        {/* Options */}
        <div className="form-box">
          <form onSubmit={onSubmitHandler}>
            {tagRadios()}
            <button id="tagBtn" type="submit" disabled>Tag</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}



