// TODO: figure out how to make user array - not object


// TODO: continuously stream data when authenticating users

// TODO: useRef to fix double click.

  // useRef explanation
  // Instead: function to update on each edit (i.e. onChange={(e) => setQuery(e.target.value)})
  // Improvement: useRef hook updates as changes are made - no need for a function


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

// empty
// Racquel tags: now it is [RacquelID] OR [RacquelID: "RacquelTag"]
// [RacquelID: "RacquelTag"]
// Simba tags: now it is [RacquelID: "RacquelTag", SimbaID: "SimbaTag"]

// 2 arrays:
// category && usersTagged
// user in index 0 has tag in index 0

  // useEffect(() => {
  //   setChosenCategory(targetValue)
  //   console.log(targetValue, chosenCategory)
  //   document.getElementById("tagBtn").disabled = false;
  // }, [targetValue, chosenCategory])

// div with scrollbar functionality

// div
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

// TODO: Only show data not tagged by user
// TODO: Find effective algorithm for this

// boolean logic
// TODO: algorithm for searching!!!!!!!!!!!!!!

// TODO: Add styling and then the tag data once json is fixed.
// This following section will display the table with the tags the user hasn't tagged.