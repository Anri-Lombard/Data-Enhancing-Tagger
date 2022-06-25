import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PORT = 2000;
 
const Tag = (props) => (
 <tr>
   <td>{props.tag.date}</td>
   <td>{props.tag.description}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.tag.id}`}>Edit</Link>
   </td>
 </tr>
);
 
export default function RecordList() {
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
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{tagList()}</tbody>
     </table>
   </div>
 );
}