import React from "react";
import { Container, Row, Col } from "reactstrap";
import useGetData from "../custom/useGetData";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import "../admin/style/User.css";

const Users = () => {
  const { data: usersData, loading } = useGetData("users");
  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
    toast.success("Delete user successfully");
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            {" "}
            <h4 className="fw-bold"> Users</h4>{" "}
          </Col>
          <Col>
            <table>
              <thead>
                <tr>
                  <th>Images</th>
                  <th>UserName</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <h5 className="pt-5 fw-bold"> Loading................. </h5>
                ) : (
                  usersData?.map((user) => (
                    <tr key={user.uid}>
                      <td className="w-50">
                        {" "}
                        <img
                          className="img_pic"
                          src={user.photoURL}
                          alt=""
                        />{" "}
                      </td>
                      <td className="w-50"> {user.displayName} </td>
                      <td  className="w-50"> {user.email}</td>
                      <td>
                        {" "}
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            deleteUser(user.uid);
                          }}
                        >
                          {" "}
                          Delete{" "}
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Users;
