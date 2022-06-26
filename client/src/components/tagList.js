import React, { useEffect, useState } from "react";

const PORT = 2000;

// TODO: continuously stream data when authenticating users

 
const Tag = (props) => (
 <tr>
   <td>{props.tag.date}</td>
   <td>{props.tag.description}</td>
 </tr>
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
 
export default function TagList() {
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
 
     // TODO: fix parsing error
    //  const tags1 = response
     const tags = await response.json();
     console.log(tags)
     setTags(tags);
   }
 
   getTags();
 
   return;
 }, [tags.length]);
 
 // This method will map out the tags on the table
 function tagList() {
   return tags.map((tag) => {
     return (
       <Tag
         tag={tag}
         key={tag.id}
       />
     );
   });
 }

 // TODO: Add styling and then the tag data once json is fixed.
 // This following section will display the table with the tags the user hasn't tagged.
 return (
  // Will need to be a form so we could submit and feed in new data
  // Don't really need a nav bar TBH
   <div>
     <h3>Manual Tagger</h3>
    <div>
      <p>Date:</p>
      <p>Description:</p>
    </div>
    <div>
      {tagOptions()}
    </div>
    {tagList()}
   </div>
 );
}