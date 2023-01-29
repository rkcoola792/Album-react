import React from "react";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data";
import { useNavigate, Link } from "react-router-dom";

const Edit = () => {
  const [albumName, setAlbumName] = useState("");
  const [id, setId] = useState("");
  let navigate = useNavigate();

  var index = data.map((e) => e.id).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();
    let a = data[index];
    a.title = albumName;

    navigate("/");
  };
  useEffect(() => {
    setAlbumName(localStorage.getItem("AlbumName"));
    setId(localStorage.getItem("Id"));
  }, []);

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Album name"
            required
            onChange={(e) => setAlbumName(e.target.value)}
            value={albumName}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default Edit;
