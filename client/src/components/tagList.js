import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

const PORT = 3000;

// TODO: continuously stream data when authenticating users

 
const Tag = (props) => (
 <tr>
   <td>{props.tag.date}</td>
   <td>{props.tag.description}</td>
   <td>
    <ul>
      {tagOptions()}
    </ul>
   </td>
 </tr>
);

// TODO: Dynamic tags
// This maps out all the tags we have, we'll make it dynamic.
const mostCommonTagsForCompany = ["tagOne", "tagTwo", "tagThree", "tagFour", "tagFive"]

function tagOptions() {
  return mostCommonTagsForCompany.map((tag) => {
    return (
      <li>
        <input type="radio" id={tag} name="tag" value={tag} />
        <label for={tag}>{tag}</label><br></br>
      </li>
    )
  })
}
 
export default function TagList() {
 const [tags, setTags] = useState([]);
 
 // This method fetches the tags from the database.
 useEffect(() => {
   async function getTags() {
     const response = await fetch(`http://localhost:${PORT}/tag`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     // TODO: fix parsing error
     console.log(response.json());
     const tags = await response.json();
     console.log(tags);
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
 
 // This following section will display the table with the tags the user hasn't tagged.
 return (
   <div>
     <h3>Tag List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Date</th>
           <th>Descripion</th>
           {/* <th>Action</th> */}
         </tr>
       </thead>
       <tbody>{tagList()}</tbody>
     </table>
   </div>
 );
}