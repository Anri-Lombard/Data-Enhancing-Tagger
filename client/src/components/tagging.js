import React, { useEffect, useState } from "react";
import NavBar from './navbar.js';
import Footer from './footer.js';
import '../css/tagging.css'

const PORT = 2000;

// TODO: figure out how to make user array - not object


// TODO: continuously stream data when authenticating users


export default function Tagging({ name, user }) {
  // TODO: Add category attribute
  const [tagToUpdate, setTagToUpdate] = useState({});

  const tagOptions = (tagToUpdate.usersTagged === undefined || tagToUpdate.usersTagged === null) ? 
                    ["tagOne", "tagTwo", "tagThree", "tagFour", "tagFive", "Other"] :
                    (
                      (tagToUpdate.usersTagged.length <= 2) ?
                      ["tagOne", "tagTwo", "tagThree", "tagFour", "tagFive", "Other"] :
                      ["SpecificTagOne", "SpecificTagTwo"]
                    )

  const [tags, setTags] = useState([]);
  const [chosenCategory, setChosenCategory] = useState("");
  // this will display the options to choose from and will be changed
  const [visibleOption, setVisibleOptions] = useState(tagOptions)
  const [query, setQuery] = useState('');
  // tags = variable = [] initially
  // setTags = function = function setTags(val) {}


  // const [usersTagged, setUsersTagged] = useState([])
  // const [categoriesChosenByUsers, setCategoriesChosenByUsers] = useState([])
  
  // TODO:
  // Add tons more options
  // the options will be outlined by Dirk 
  //* find out the display of the tags 


  // TODO:
  // 1. Boolean = if 2 users tagged + 2 categories are the same, then true (tagged completely)
  //    else if 2 users tagged + 2 categories not the same, then decision state.
  // 2. Search algorithm for untagged data
  //    - If tagged by user, don't show for user.
  //    - if tagged completely, don't show to anyone.
  //    ---- Obviously, as data gets more, this can become inefficient.
  // 3. DONE SCREEN - no data to tag.
  //
  //
  // Potential solutions:
  // - R: Add untagged data to queue and supply in order of queue. (add where boolean is false)
  /* - S: Instead of giving the users all the data all at once, how about we do it in batches where a single user gets say 30 pieces of data and works on them and those 30 are marked as "currently engaged"
      - so in addition to checking if the user is in the "usersTagged" array, we also search for a "currently engaged" marker that we reset just as the user logs out
      - Logic in SQL: select * from Data where user not in usersTagged and not currentlyEngaged limit 30;
      - Limit could be arbitrary based on what we think shoudl be the right volume for a single sitting.
  */

  // - Mongodb updates in real time - along with app.
  // - Curently tagging: thisUser...
  // --- Next piece button
  // PROBLEM: We fetch data only on loading, not continuously.

  // What we know: categories and users, when to show data to user, we can lead random data continuously.
  // What we don't know: how to make sure a single user works on a piece of data at a time.
  // To move forward: use 5 piences of json data for testing - move bigger later.

  // 1. Use only 10 json data in mongodb
  // 2. Implement logic
  // 3. Try to f everything up together.



  // xxxxxxxxxxxx--
  // xxxxxxxxxxxxx-
  // xxxxxxxxxxxxxx

  // xxxxxxxxxxxx--
  // User logs in.
  // --
  // -
  // Problem: 2 users have it in their queues (when tagging together)
  // Concurently programming.
  // DONE

  // const usersTaggedArray = new Array(user)
  // const usersTaggedArray = ["1"]
  const usersTaggedArray = ["1", "2"]
  // const usersTaggedArray = ["1", "2", "3"]
  const userCategoriesArray = []

  // console.log("0");
  // console.log("1 " + typeof(user));
  // console.log("2 " + name === undefined);
  // console.log("3 " + user)
  // console.log("4 " + typeof(new Array(user)));
  // console.log(new Array(user)[0]);

  // 1. length of array
  //    - length 1:
  //        -- user in array? Move on...
  //        -- user not array? Tag...
  //            --- different to 1st: 3rd (2 options) - Dirk dissagree (report...)
  //            --- same: Tagged - boolean "tagged"
  //                eg. [Anri: "tagOne"], [Racquel: "tagOne"] == "tagged"
  //    - length 2 (dissagree):
  //        -- 2 options: "tagged" = true once chosen
  // Logic of tagging the tags :) -- The above description is the idea of what we want to achieve :) 


  // filter function 
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = tagOptions.filter((option) => {
        return option.toLowerCase().includes(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setVisibleOptions(results);
    } else {
      setVisibleOptions(tagOptions);
      // If the text field is empty, show all users
    }

    setQuery(keyword);
  };

  const Tag = (props) => (
    <div>
      <div>
        <p className="paragraph">Description: {props.tag.description}</p>
        <p className="paragraph">Current Category: {props.tag.category}</p>
        <p className="paragraph">Number of Users Who Tagged: {props.tag.usersTagged === undefined || props.tag.usersTagged === null ? "No One" : props.tag.usersTagged.length}</p>
        <p className="paragraph">User Categories: {props.tag.userCategories === undefined || props.tag.userCategories === null ? "No Categories" : props.tag.userCategories}</p>
      </div>
    
      <div className="form-box">
        {/* TODO: fix continuous typing error */}
        <form onSubmit={onSubmitHandler}>
          {tagRadios()}
          <button id="tagBtn" type="submit" disabled>Tag</button>
        </form>
      </div>
    </div>
  );


  // Synchronous
  // -
  //  -
  //   -
  //    -

  // Asynchronous
  // -
  // -
  // -
  // -

  async function onSubmitHandler(e) {
    e.preventDefault();

    userCategoriesArray.push(chosenCategory)

    setTimeout(() => {
      window.location.reload()
    }, 200)


    // TODO: logic for if already tagged.
    const editedTag = {
      id: tagToUpdate.id,
      date: tagToUpdate.date,
      description: tagToUpdate.description,
      balance: tagToUpdate.balance,
      transactionValue: tagToUpdate.transactionValue,
      category: chosenCategory, // This is only specified if it is fully tagged

      // TODO: Add users who tag if they haven't
      // TODO: logic for too many users
      usersTagged: tagToUpdate.usersTagged === null || tagToUpdate.usersTagged === undefined ?
                    new Array(user) : tagToUpdate.usersTagged.push(user),
      userCategories: userCategoriesArray
      // tagged: ...
    };

    // empty
    // Racquel tags: now it is [RacquelID] OR [RacquelID: "RacquelTag"]
    // [RacquelID: "RacquelTag"]
    // Simba tags: now it is [RacquelID: "RacquelTag", SimbaID: "SimbaTag"]

    // 2 arrays:
    // category && usersTagged
    // user in index 0 has tag in index 0

    // document.getElementsByClassName("radio-inputs").checked = false;
    document.getElementById("tagBtn").disabled = true;

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:${PORT}/update/${tagToUpdate.id}/`, {
      method: "POST",
      body: JSON.stringify(editedTag),
      headers: {
        'Content-Type': 'application/json'
      },
    });
  }

  let targetValue = ""

  // useEffect(() => {
  //   setChosenCategory(targetValue)
  //   console.log(targetValue, chosenCategory)
  //   document.getElementById("tagBtn").disabled = false;
  // }, [targetValue, chosenCategory])

  function onChangeHandler(e) {

    // TODO: fix double click?
    // targetValue = e.target.value;
    setChosenCategory(e.target.value)
    document.getElementById("tagBtn").disabled = false;
    
  }

  function tagRadios() {
    // return tagOptions.map((tag) => {
      return (
        // div with scrollbar functionality

        //div
        // <li key={tag} >
        //   <label>  
        //   <input 
        //     className="radio-inputs" 
        //     type="radio" id={tag} 
        //     name="tag" 
        //     value={tag} 
        //     onChange={onChangeHandler} 
        //   />
          
        //   <div className="circle"></div>
        //   <span>{tag}</span>
        //   </label>
        // </li>
        // div

        <div className="user-list">
          {visibleOption && visibleOption.length > 0 ? (
            visibleOption.map((option) => (
               <li key={option} >
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
            <h1>No results found!</h1>
          )}
        </div>

        
      )
    // })
  }

  useEffect(() => {
    async function getTags() {
      const response = await fetch(`http://localhost:${PORT}/tag/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const tags = await response.json();

      setTags(tags);
    }

    getTags();

    return;
  }, [tags.length]);


  useEffect(() => {

    // TODO: Only show data not tagged by user
    // TODO: Find effective algorithm for this
   
    // boolean logic
    // TODO: algorithm for searching!!!!!!!!!!!!!!
    const randomKey = 5;
    const randomData = tags[randomKey];
    if (randomData !== undefined) {
      setTagToUpdate(randomData)
    }
  }, [tags]);


  function getSingleTag() {
    // console.log(typeof(tagToUpdate.usersTagged))
    // console.log(tagToUpdate.usersTagged)
    return <Tag tag={tagToUpdate} />
  }

  // TODO: Add styling and then the tag data once json is fixed.
  // This following section will display the table with the tags the user hasn't tagged.
  return (
    <>
      <NavBar name={name} />
      <div className="header">
        <h3>Tag Data With Following Details:</h3>
        {getSingleTag()}
          <div className="form-box search-box">
            <input
              type="search"
              value={query}
              onChange={filter}
              className="input form-control"
              placeholder="Filter"
            /> 
        </div>
      </div>
      <Footer />
    </>
  );
}



