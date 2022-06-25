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
  
      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }
  
      setForm(record);
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
      date: form.date,
      description: form.description,
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
  
  // This following section will display the form that takes input from the user to update the data.
  // We won't need the for for date and description tho, only tag
  // We also need submit to store away data and continuously retrieve more to tag.
  return (
    <div>
      <h3>Update Tag</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Date: </label>
          <input
            type="text"
            className="form-control"
            id="date"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
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