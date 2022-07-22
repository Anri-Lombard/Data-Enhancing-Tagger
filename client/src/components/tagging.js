import React, { useEffect } from "react";
import NavBar from './navbar.js';
import Footer from './footer.js';
import Tag from './tag.js';
import TagRadios from './tagRadios.js';
import '../css/tagging.css';
import { useStore } from '../hooks/store';


const PORT = 2000;

const Tagging = React.memo(({ name, user }) => {
  const [state, dispatch] = useStore();
  let optionSelection = 0;

  useEffect(() => {
    dispatch('filter', "");
  }, [])

  // TODO: fix continuous run
  async function getOneTag() {
    console.log("Called");
    const response = await fetch(`http://localhost:${PORT}/tag/one`);

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const tag = await response.json();

    dispatch('setTagToUpdate', tag)
  }

  // Tag at the start
  useEffect(() => {
    getOneTag();
  }, []);


  const filter = (e) => {
    const keyword = e.target.value;

    // Update tag for potential changes when typing
    getOneTag();

    // TODO: fix for 2 options
    dispatch('filter', keyword);
  };

  async function submitProcess() {
    // get tag
    getOneTag();
    // update tag
    getOneTag();

    let dataTagged = false;
    let userCategoriesArray = [];
    let usersTaggedArray = [];
    let editedTag = [];
    let updatedChosenCategory = "";

    // userCategories
    if (state.tagToUpdate.userCategories === undefined) {
      userCategoriesArray = new Array(state.chosenCategory);
    } else {
      state.tagToUpdate.userCategories.push(state.chosenCategory);
      userCategoriesArray = state.tagToUpdate.userCategories;
    }

    // usersTagged
    if (state.tagToUpdate.usersTagged === undefined) {
      usersTaggedArray = new Array(user);
    } else {
      state.tagToUpdate.usersTagged.push(user);
      usersTaggedArray = state.tagToUpdate.usersTagged;
    }

    if (userCategoriesArray.length === 1) {
      updatedChosenCategory = userCategoriesArray[0];
      // setChosenCategory(userCategoriesArray[0])
    } else if (userCategoriesArray.length === 2) {
      if (userCategoriesArray[0] !== userCategoriesArray[1]) {
        // Decision state
        updatedChosenCategory = userCategoriesArray[1];
        // setChosenCategory(userCategoriesArray[1]);
      } else {
        // Agrees
        dataTagged = true;
      }
    } else {
      dataTagged = true;
      updatedChosenCategory = userCategoriesArray[2];
      // setChosenCategory(userCategoriesArray[2]);
    }

    // userCategoriesArray is undefined
    editedTag = {
      ...state.tagToUpdate,
      category: updatedChosenCategory,
      usersTagged: usersTaggedArray,
      userCategories: userCategoriesArray,
      tagged: dataTagged
    };

    document.getElementById("tagBtn").disabled = true;

    // add class to details element when submitting
    document.getElementById("details").classList.add("fade");
    setTimeout(() => {
      document.getElementById("details").classList.remove("fade");
    }, 1000)

    // document.getElementById("search-input").value = "";
    dispatch('filter', "");
    document.getElementById("search-input").focus();

    await fetch(`http://localhost:${PORT}/update/${state.tagToUpdate.id}/`, {
      method: "POST",
      body: JSON.stringify(editedTag),
      headers: {
        'Content-Type': 'application/json'
      },
    });
  }

  // -
  //  -
  //   -

  // -
  // -
  // -


  function onSubmitHandler(e) {
    e.preventDefault();

    submitProcess();

  }

  function onChangeHandler(e) {
    const category = e.target.value;
    dispatch('setChosenCategory', category);
    document.getElementById("tagBtn").disabled = false;
  }

  function onKeyPressHandler(e) {
    if (e.key === "Enter") {
      const category = state.visibleOptions[0];
      console.log(category);
      dispatch('setChosenCategory', category);
      console.log(state.category);
      document.getElementById("tagBtn").disabled = false;
      submitProcess();
    }
  }

  function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  // TODO: getServerSideProps() rather than useEffect()
  // async function getServerSideProps(context) {


  //   return {
  //     props: {

  //     }
  //   }
  // }

  // TODO: submit and tag
  // TODO: user logic
  return (
    <>
      <NavBar name={name} />

      <div className="header">
        {/* <h3>Tag Data With Following:</h3> */}
        <div id="details"> {/* Details */}
          <Tag tag={state.tagToUpdate} />
        </div>


        {/* Filter */}
        <div className="form-box search-box shadow-none">
          <input
            id="search-input"
            type="search"
            value={state.query}
            onChange={filter}
            className="input form-control shadow-none"
            placeholder="Search"
            autoFocus
            onKeyPress={onKeyPressHandler}
            autoComplete="off"
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
            <button id="tagBtn" type="submit" disabled >Tag</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
})

export default Tagging;
