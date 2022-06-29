import React, { useEffect, useState } from "react";
import './tag.css';
import  NavBar  from './NavBar.js';

// import { useNavigate } from "react-router-dom";

const PORT = 2000;



// TODO: continuously stream data when authenticating users



export default function Tagging({ name }) {
  const [tags, setTags] = useState([]);
  const [tagToUpdate, setTagToUpdate] = useState({});
  const [chosenCategory, setChosenCategory] = useState("");
  const [tagOptions, setTagOptions] = useState(
    ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Other"]
  )

  console.log(name);
  
  const Tag = (props) => (

    <div>
    <div>
      <p  className= "paragraph">ID: {props.tag.id}</p>
      <p className= "paragraph">Date: {props.tag.date}</p>
      <p className= "paragraph">Description: {props.tag.description}</p>
      {/* Use react conditioning for if it has a category */}
      <p className= "paragraph">Current Category: {props.tag.category}</p>
    </div>
    <div className="form-box">
    <form onSubmit={onSubmitHandler}>
      {tagRadios()}
      <button id="tagBtn" type="submit" disabled>Tag</button>
    </form>
    </div>
    </div>
   
  );
  
  // const navigate = useNavigate();
  
   
  async function onSubmitHandler(e) {
    e.preventDefault()
    setTimeout(() => {
      window.location.reload()
    }, 500)
    // $tagBtn.disabled = true;
    
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
    console.log(e.target.value);
    setChosenCategory(e.target.value)
    document.getElementById("tagBtn").disabled = false;
  }
  
  // TODO: Dynamic tags
  // This maps out all the tags we have, we'll make it dynamic.
  // const mostCommonTagsForCompany = ["tagOne", "tagTwo", "tagThree", "tagFour", "tagFive"]
  
  function tagRadios() {
    return tagOptions.map((tag) => {
      return (

        <div >
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
          

           {/* TODO: other logic */}
          {tag === "Other" ? <input type="text" name={tag} placeholder="specify" /> : null}
        </li>
        </div>
      
        
      )
    })
  }
 /*
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
  // Random: items[Math.floor(Math.random()*items.length)]
  const randomKey = 5;
  const randomData = tags[randomKey];
  if (randomData !== undefined) {
    setTagToUpdate(randomData)
  }
 }, [tags]);

*/
 function getSingleTag() {
  return <Tag tag={tagToUpdate} />
 }

 // TODO: Add styling and then the tag data once json is fixed.
 // This following section will display the table with the tags the user hasn't tagged.
 return (
  <div>
  <NavBar/>
   <div className="header">
     <h3>Manual Tagger Styling </h3>
     {getSingleTag()}
   </div>
   </div>
 );
}