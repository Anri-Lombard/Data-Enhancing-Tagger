import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import NavBar from './navbar.js';
import Footer from './footer.js';
import '../css/tagging.css'
import Information from './jsonFilesfortags/tagInfo';

const PORT = 2000;


// TODO: continuously stream data when authenticating users


// TODO: fix name undefined
export default function Tagging({ name, user }) {
  const [tags, setTags] = useState([]);
  const [tagToUpdate, setTagToUpdate] = useState({});
  const [chosenCategory, setChosenCategory] = useState("");
  const [usersTagged, setUsersTagged] = useState([])
 // to do list
  // Add tons more options
  // the options will be outlined by Dirk 
  //* find out the display of the tags 

  // TODO: Add category attribute
  const tagOptions = (tagToUpdate.usersTagged === undefined || tagToUpdate.usersTagged === null) ? 
                    ["tagOne", "tagTwo", "tagThree", "tagFour", "tagFive", "Other"] :
                    (
                      (tagToUpdate.usersTagged.length < 2) ?
                      ["tagOne", "tagTwo", "tagThree", "tagFour", "tagFive", "Other"] :
                      ["SpecificTagOne", "SpecificTagTwo"]
                    )

  // const usersTaggedArray = new Array(user)
  const usersTaggedArray = new Array(user)

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


  //---------------------------------------------------------creating the search bar fucntionaluty-----------------------



    const Tag = (props) => (
    <div>
      <div>
        <p className="paragraph">Description: {props.tag.description}</p>
        <p className="paragraph">Current Category: {props.tag.category}</p>
        <p className="paragraph">Number of Users Who Tagged: {props.tag.usersTagged === undefined || props.tag.usersTagged === null ? "No One" : props.tag.usersTagged.length}</p>
      </div>
      <div className="form-box">
        <form onSubmit={onSubmitHandler}>
          {tagRadios()}
          <button id="tagBtn" type="submit" disabled>Tag</button>
        </form>
      </div>
    </div>
  );

  const items = Information.map(data=>{
    return(
    <div>
      <ul>
        <li style={{position:'relative',left:'10vh'}}>
          <span className="styleInfo">{data.name}</span>
          <span className="styleInfo">{data.age}</span>
          <span className="styleInfo">{data.country}</span>
        </li>
      </ul>
    </div>
    )
  })


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
      usersTagged: usersTaggedArray,
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


    // TODO: fix navigate
    // navigate("/", { replace: true });
  }

  // useEffect(() => {
  //   setChosenCategory(radioChosen);

  // }, [radioChosen])

  function onChangeHandler(e) {
    setChosenCategory(e.target.value)
    document.getElementById("tagBtn").disabled = false;
  }

  function tagRadios() {
    return tagOptions.map((tag) => {
      return (
        // div with scrollbar functionality

        //div
        <li key={tag} >
          <label>  
          <input 
            className="radio-inputs" 
            type="radio" id={tag} 
            name="tag" 
            value={tag} 
            onChange={onChangeHandler} 
          />
          <div class="circle"></div>
          <span>{tag}</span>
          </label>
        </li>
        // div
      )
    })
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
        {items}
        {getSingleTag()}
        
      </div>
    </>
  );
}