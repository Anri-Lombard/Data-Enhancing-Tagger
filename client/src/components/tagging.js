import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PORT = 2000;


// TODO: continuously stream data when authenticating users



export default function Tagging() {
  const [tags, setTags] = useState([]);
  const [tagToUpdate, setTagToUpdate] = useState({});
  const [chosenCategory, setChosenCategory] = useState("");

  
  const Tag = (props) => (
    <div>
    <div>
      <p>ID: {props.tag.id}</p>
      <p>Date: {props.tag.date}</p>
      <p>Description: {props.tag.description}</p>
      {/* Use react conditioning for if it has a category */}
      <p>Current Category: {props.tag.category}</p>
    </div>
    <form onSubmit={onSubmitHandler}>
      {tagOptions()}
      <button id="tagBtn" type="aubmit" disabled>Tag</button>
    </form>
   </div>
  );
  
  
  const navigate = useNavigate();
  async function onSubmitHandler(e) {
    e.preventDefault()
    
    // console.log("hi");
    // console.log("clicked");
  
    // TODO: logic for if already tagged.
  
    const editedTag = {
      id: tagToUpdate.id,
      date: tagToUpdate.date,
      description: tagToUpdate.description,
      balance: tagToUpdate.balance,
      transactionValue: tagToUpdate.transactionValue,
      category: chosenCategory
    };

    console.log(editedTag);
    // console.log(JSON.stringify(editedTag));
  
    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:${PORT}/update/${tagToUpdate.id}/`, {
      method: "POST",
      body: JSON.stringify(editedTag),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    
    // TODO: fix navigate
    navigate("/", { replace: true });
  }
  
  function onChangeHandler(e) {
    setChosenCategory(e.target.value);
    console.log(chosenCategory);
    document.getElementById("tagBtn").disabled = false;
  }
  
  // TODO: Dynamic tags
  // This maps out all the tags we have, we'll make it dynamic.
  const mostCommonTagsForCompany = ["tagOne", "tagTwo", "tagThree", "tagFour", "tagFive"]
  
  function tagOptions() {
    return mostCommonTagsForCompany.map((tag) => {
      return (
        <li key={tag}>
          <input type="radio" id={tag} name="tag" value={tag} onChange={onChangeHandler} />
          <label>{tag}</label><br></br>
        </li>
      )
    })
  }
 
 // This method fetches the tags from the database.
 useEffect(() => {
   async function getTags() {
     const response = await fetch(`http://localhost:${PORT}/tag/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
     console.log("Hey");

     const tags = await response.json();

     setTags(tags);
   }
 
   getTags();
 
   return;
 }, [tags.length]);

 useEffect(() => {
  const randomKey = 5;
  const randomData = tags[randomKey];
  if (randomData !== undefined) {
    setTagToUpdate(randomData)
  }
 }, [tags]);

 function getSingleTag() {
  // TODO: Logic to skip data user has tagged
  // get random data
  // const keys = Object.keys(tags);
  // const randomKey =  keys[Math.floor(Math.random() * keys.length)];
  // const randomKey = 5;

  // TODO: fix undefined
  // const randomData = tags[randomKey];
  if (tagToUpdate !== undefined) {
    // setTagToUpdate(randomData)
    return <Tag tag={tagToUpdate} />
  }
 }

 // TODO: Add styling and then the tag data once json is fixed.
 // This following section will display the table with the tags the user hasn't tagged.
 return (
   <div>
     <h3>Manual Tagger</h3>
    {getSingleTag()}
   </div>
 );
}