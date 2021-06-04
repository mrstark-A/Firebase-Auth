import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../Contex/Authcontex";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Dashbord() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  async function handleLogOut() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Faild to log out");
    }
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email</strong>
          {currentUser?.email || currentUser?.username}
          <br />
          <br />
          <Link to="/update-profile" className="btn btn-primary w-100">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogOut}>
          Log out
        </Button>
      </div>
    </>
  );
}
