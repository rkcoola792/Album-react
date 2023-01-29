import React from "react";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../data";
import { useNavigate, Link } from "react-router-dom";
const Album = () => {
  const navigate = useNavigate();

  const [dataLocal, setDataLocal] = useState([]);
  const [localStorageData, setLocalStorageData] = useState();
  // fethcing the data from the API
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/albums`;

    fetch(url)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setDataLocal(res);
      });
  }, []);

  // delete function
  const handleDelete = (id) => {
    var index = data.map((e) => e.id).indexOf(id);
    data.splice(index, 1);
    navigate("/");
  };

  // Edit function
  const handleEdit = (id, title) => {
    localStorage.setItem("Id", id);
    localStorage.setItem("AlbumName", title);
  };

  return (
    <div>
    <h1 style={{textAlign:"center"}}>Album list</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>
                  {item.title}
                  <br></br>
                </td>
                <td>
                  <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                  &nbsp;&nbsp;&nbsp;
                  <Link to="/edit">
                    <Button onClick={() => handleEdit(item.id, item.title)}>
                      Edit
                    </Button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <br />
      <Link to="/create">
        <Button className="d-grid gap-2" style={{ width: "100%" }} size="lg">
          Add
        </Button>
      </Link>
    </div>
  );
};

export default Album;
