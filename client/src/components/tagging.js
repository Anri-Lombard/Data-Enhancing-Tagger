import React, { useEffect, useState } from "react";

const PORT = 2000;

// TODO: continuously stream data when authenticating users

 
const Tag = (props) => (
 <div>
  <div>
    <p>Date: {props.date}</p>
    <p>Description: {props.description}</p>
  </div>
  <div>
    {tagOptions()}
  </div>
 </div>
);

// TODO: Dynamic tags
// This maps out all the tags we have, we'll make it dynamic.
const mostCommonTagsForCompany = ["tagOne", "tagTwo", "tagThree", "tagFour", "tagFive"]

function tagOptions() {
  return mostCommonTagsForCompany.map((tag) => {
    return (
      <li key={tag}>
        <input type="radio" id={tag} name="tag" value={tag} />
        <label>{tag}</label><br></br>
      </li>
    )
  })
}
 
export default function Tagging() {
 const [tags, setTags] = useState([]);
 
 // This method fetches the tags from the database.
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

 function getSingleTag() {
  // TODO: Logic to skip data user has tagged
  // get random data
  const keys = Object.keys(tags);
  const randomKey =  keys[Math.floor(Math.random() * keys.length)];

  // TODO: fix undefined
  const randomData = tags[randomKey];
  if (randomData !== undefined) {
    return <Tag date={randomData.date} description={randomData.description} />
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