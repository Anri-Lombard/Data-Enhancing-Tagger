import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
  const PORT = 2000;
  
  const [form, setForm] = useState({
    date: "",
    description: "",
  });
  const params = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`http://localhost:${PORT}/tag/${id}`);
  
      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const tag = await response.json();
      if (!tag) {
        window.alert(`Tag with id ${id} not found`);
        navigate("/");
        return;
      }
  
      setForm(tag);
    }
  
    fetchData();
  
    return;
  }, [params.id, navigate]);
  
  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  
  async function onSubmit(e) {
    e.preventDefault();
    const editedTag = {
      // date: form.date,
      // description: form.description,

      // Just need category
      category: form.category
    };
  
    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:${PORT}/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedTag),
      headers: {
        'Content-Type': 'application/json'
      },
    });
  
    navigate("/");
  }
  
  // Tagging data continuously with amount of tags chosen.
  return (
    <div>
      <h3>Update Tag</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="tagOptions"
              id="tagOne"
              value="take-away"
              checked={form.level === "take-away"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="tagOne" className="form-check-label">Take Away</label>
          </div>
        </div>
        <br />
  
        <div className="form-group">
          <input
            type="submit"
            value="Update Tag"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}