import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { fetchAllUser } from "../services/UserService";
import ReactPaginate from "react-paginate";
import ModelAddNew from "./ModelAddNew";

function TableUsers() {
  const [listUsers, setListUsers] = useState([]);
  // const [totalUsers, setTotalUsers] = useState(0);
  // const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    //call API
    getUser(1);
  }, []);

  const getUser = async (page) => {
    let res = await fetchAllUser(page);
    if (res && res.data) {
      setListUsers(res.data);
      // setTotalUsers(res.data.length);
      // setTotalPages(Math.ceil(totalUsers / 10));
    }
    console.log(">>>>listUsers: ", res.data);
  };
  const handlePageChange = (e) => {
    // console.log(">>>>biến e:", e);
    getUser(+e.selected + 1);
  };
  const [show, setShow] = useState(false);

  return (
    <Container>
      <div className="my-3 add-new">
        <span>
          <b>List Users:</b>
        </span>
        <Button variant="success" onClick={() => setShow(true)}>
          Add new user
        </Button>{" "}
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`user-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={6}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
      />

      <ModelAddNew show={show} setShow={setShow} />
    </Container>
  );
}

export default TableUsers;
