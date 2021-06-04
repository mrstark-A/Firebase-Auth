// import { Alert } from "bootstrap";
import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../Contex/Authcontex";
import { Link, useHistory } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import { GoogleOutlined, TwitterOutlined } from "@ant-design/icons";
import firebase from "firebase/app";
import { auth, provider, provider1 } from "../Firebase";
export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to Sign In");
    }
    setLoading(false);
  }
  async function googles() {
    await auth.signInWithPopup(provider).catch(alert);
    history.push("/");
  }
  async function githubs() {
    await auth.signInWithPopup(provider1).catch(alert);
    history.push("/");
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
            <h4 className="text-center   mt-30">or</h4>
          </Form>
          <Button className="w-100 " onClick={googles}>
            <GoogleOutlined />
            <span> Log In with Google</span>
          </Button>
          <br />
          <br />
          <Button
            className="w-100"
            onClick={githubs}
            style={{ backgroundColor: "#353535" }}
          >
            <GitHubIcon />
            <span> Log In with GitHub</span>
          </Button>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/Signup">Sign Up</Link>
      </div>
    </>
  );
}
