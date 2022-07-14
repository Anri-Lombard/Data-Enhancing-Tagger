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
    dispatch('filter', "");
    console.log(state.tagToUpdate);
  }, [])

  useEffect(() => {
    async function getOneTag() {
      const response = await fetch(`http://localhost:${PORT}/tag/one`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const tag = await response.json();

      console.log(tag);
      dispatch('setTagToUpdate', tag)
    }

    getOneTag();
  }, []);


  const filter = (e) => {
    const keyword = e.target.value;

    dispatch('filter', keyword);
    console.log(state.visibleOptions);
  };


  async function onSubmitHandler(e) {
    e.preventDefault();

    dispatch('updateTag', PORT, user);
    
    document.getElementById("tagBtn").disabled = true;
  }

  function onChangeHandler(e) {
    const category = e.target.value;
    dispatch('setChosenCategory', category);
    document.getElementById("tagBtn").disabled = false;
  }

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
