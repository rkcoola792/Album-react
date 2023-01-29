import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../data";
import { useNavigate, Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

// for adding an album
const Create = () => {
  const [albumName, setAlbumName] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let ids = uuid();

    let uniqueId = ids.slice(0, 3);
    let a = albumName;

    // adding data to the array
    data.push({ id: uniqueId, title: a });
    navigate("/");
  };
  return (
    <div>
      {/* using bootstrap form */}
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
        <h1 style={{ textAlign: "center" ,margin:"25px"}}>Add Album</h1>
          <Form.Control
            type="text"
            placeholder="Enter Album name"
            required
            onChange={(e) => setAlbumName(e.target.value)}
            value={albumName}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Create;
