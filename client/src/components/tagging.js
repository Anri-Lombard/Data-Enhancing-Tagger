import React, { useEffect } from "react";
import NavBar from './navbar.js';
import Footer from './footer.js';
import Tag from './tag.js';
import TagRadios from './tagRadios.js';
import '../css/tagging.css';
import { useStore } from '../hooks/store';

const PORT = 2000;

const Tagging = ({ name, user }) => {
  const [state, dispatch] = useStore();

  useEffect(() => {
    dispatch('getOneTag', PORT);
    dispatch('filter', "");
    console.log(state.tagToUpdate);
  }, [])


  // const [tagToUpdate, setTagToUpdate] = useState({});

  // hardcoded for now
  // let dataTagged = false;
  // let userCategoriesArray = [];
  // let usersTaggedArray = [];
  // let editedTag = [];
  // let tagOptions = ["Income","Salary/Wages", "Investment","Returned Purchase","Bonus","Interest Income","Reimbursement","Rental Income","Cash","Check"," Arts","Music","Dating","Movies & DVDs","Newspaper & Magazines","Social Club","Sport", "Games","TV"," Tuition","Student Loan","Books & Supplies","Pets","General Shopping","Department Store","Clothing","Home","Books","Electronics & Software","Hobbies","Sporting Goods","Hair","Laundry","Beauty","Spa & Massage", "Dentist","Doctor", "Eye care","Pharmacy","Gym","Pets","Sports", "Gift","Charity","Equities","Bonds","Bank products","Retirement","Annuities","Real-estate", "Television","Home Phone","Internet","Mobile Phone","Utility Bill","Car Insurance","Car Payment","Parking","Public transport","Service & Repairs","Taxi","Fuel"," Air Travel","Hotel","Rental Car","Vacation","Service Fee","Late Fee","Finance Charge","ATM Fee","Bank Fee","Commissions","Advertising","Financial Services", "Office Supplies","Printing","Shipping","Legal"," Advisory and Consulting","Financial Services","Lawyer","Tax","Betting","Lottery","Casino", "Rent","Mortgage","Secured loans","Property taxes","Repairs & Maintenance"," Pension payments","Long Term insurance","Short term insurance","Insurance (short/long)","Health insurance"]
  // tagOptions logic
  // const [oneTag, setOneTag] = useState();
  // const [chosenCategory, setChosenCategory] = useState("");
  // this will display the options to choose from and will be changed
  // const [visibleOptions, setVisibleOptions] = useState(tagOptions)
  // const [query, setQuery] = useState('');

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

    dispatch('filter', keyword);

    dispatch('getOneTag', PORT);
    console.log("Here");
    console.log(state.tagToUpdate);

    // console.log("Query");
    // console.log(state.query);
    // console.log(state.visibleOptions);
    // if (keyword !== '') {
    //   const results = tagOptions.filter((option) => {
    //     return option.toLowerCase().includes(keyword.toLowerCase());
    //   });
    //   setVisibleOptions(results);
    // } else {
    //   setVisibleOptions(tagOptions);
    // }

    // setQuery(keyword);
  };


  async function onSubmitHandler(e) {
    e.preventDefault();
    // setTimeout(() => {
    //   window.location.reload()
    // }, 200)

    // // userCategories
    // if (tagToUpdate.userCategories === undefined) {
    //   userCategoriesArray = new Array(chosenCategory);
    // } else {
    //   tagToUpdate.userCategories.push(chosenCategory);
    //   userCategoriesArray = tagToUpdate.userCategories;
    // }

    // // usersTagged
    // if (tagToUpdate.usersTagged === undefined) {
    //   usersTaggedArray = new Array(user);
    // } else {
    //   tagToUpdate.usersTagged.push(user);
    //   usersTaggedArray = tagToUpdate.usersTagged;
    // }

    // if (userCategoriesArray.length === 1) {
    //   setChosenCategory(userCategoriesArray[0])
    // } else if (userCategoriesArray.length === 2) {
    //   if (userCategoriesArray[0] !== userCategoriesArray[1]) {
    //     // Decision state
    //     tagOptions = [userCategoriesArray[0], userCategoriesArray[1]]
    //     setChosenCategory(userCategoriesArray[1]);
    //   } else {
    //     // Agrees
    //     dataTagged = true;
    //   }
    // } else {
    //   dataTagged = true;
    //   setChosenCategory(userCategoriesArray[2]);
    // }

    // // userCategoriesArray is undefined
    // editedTag = {
    //   id: tagToUpdate.id,
    //   date: tagToUpdate.date,
    //   description: tagToUpdate.description,
    //   balance: tagToUpdate.balance,
    //   transactionValue: tagToUpdate.transactionValue,
    //   category: chosenCategory,
    //   usersTagged: usersTaggedArray,
    //   userCategories: userCategoriesArray,
    //   tagged: dataTagged
    // };

    // await fetch(`http://localhost:${PORT}/update/${tagToUpdate.id}/`, {
    //   method: "POST",
    //   body: JSON.stringify(editedTag),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    // });

    dispatch('updateTag', PORT, user);
    
    document.getElementById("tagBtn").disabled = true;
  }

  function onChangeHandler(e) {
    const category = e.target.value;
    dispatch('setChosenCategory', category);
    // setChosenCategory(e.target.value)
    document.getElementById("tagBtn").disabled = false;
  }

  // useEffect(() => {
  //   dispatch('getOneTag', PORT);
  //   console.log("Here");
  //   console.log(state.tagToUpdate);
  // }, []);
  // dispatch('getOneTag', PORT)

  // useEffect(() => {
  //   console.log(oneTag)
  //   if (oneTag !== undefined && oneTag !== null) {
  //     setTagToUpdate(oneTag)
  //   }
  // }, [oneTag]);

  // function getUpdatedTagRadios() {
  //   return <TagRadios tagToUpdate={tagToUpdate} visibleOptions={visibleOptions} onChangeHandler={onChangeHandler} />
  // }

  // this needs to change when we implement getting single tag instead of an array
  // function getSingleTag() {
  //   return <Tag tag={tagToUpdate} />
  // }

  return (
    <>
      <NavBar name={name} />

      <div className="header">
        <h3>Tag Data With Following Details:</h3>

        {/* Details */}
        <Tag tag={state.tagToUpdate} />

        {/* Filter */}
        <div className="form-box search-box shadow-none">
          <input
            type="search"
            value={state.query}
            onChange={filter}
            className="input form-control shadow-none"
            placeholder="Search"
            autoFocus
          />
        </div>

        {/* Options */}
        <div className="form-box">
          <form onSubmit={onSubmitHandler}>
            <div className="form-box-static">
            <TagRadios 
              tagToUpdate={state.tagToUpdate} 
              visibleOptions={state.visibleOptions} 
              onChangeHandler={onChangeHandler} 
            />
            </div>
            <button id="tagBtn" type="submit" disabled>Tag</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Tagging;
