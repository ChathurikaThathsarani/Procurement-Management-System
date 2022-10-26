import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createSiteAction } from "../../actions/siteAction";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import MainScreen from "../../components/MainScreen";
import "./siteMangement.css";

export default function CreateSite({ history }) {
  const [siteId, setSiteId] = useState("");
  const [siteName, setSiteName] = useState("");
  const [siteAddress, setSiteAddress] = useState("");
  const [siteContactNumber, setSiteContactNumber] = useState("");
  const [budget, setBudget] = useState("");
  const [siteManager, setSiteManager] = useState("");

  const dispatch = useDispatch();
  const staff_Login = useSelector((state) => state.staff_Login);
    const { staffInfo } = staff_Login;
    
  const Site_Management_Create = useSelector(
    (state) => state.Site_Management_Create
  );
  const { loading, error } = Site_Management_Create;

  const resetHandler = () => {
    setSiteId("");
    setSiteName("");
    setSiteAddress("");
    setSiteContactNumber("");
    setBudget("");
    setSiteManager("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("hello");
    // if (!workoutID || !name || !workoutCategory || !instructions || !repetitions || !tips) return;
    dispatch(
      createSiteAction(
        siteId,
        siteName,
        siteAddress,
        siteContactNumber,
        budget,
        siteManager
      )
    );

    resetHandler();
    history.push("/workout-handling-view");
  };
  const demoHandler = async (e) => {
    e.preventDefault();
    setSiteId("06");
    setSiteName("Side Planks");
    setSiteAddress("Legs");
    setSiteContactNumber(
      "Lie on your side with your knees bent,and prop your upper body up on your elbow then raise your hips off the floor, and hold for 6 seconds"
    );
    setBudget("10");
    setSiteManager("Switch to your other side and repeat steps 1 through 5");
  };
  useEffect(() => {}, []);
  if (staffInfo) {
    return (
      <div className="SiteBackgroundCreate">
        <MainScreen title="CREATE A SITE">
          <Button
            variant="success"
            style={{
              marginLeft: 10,
              marginBottom: 6,
              float: "left",
              fontSize: 15,
            }}
            size="lg"
            href="/"
          >
            Back to Site List
          </Button>
          <br></br>
          <br></br>
          <br></br>
          <Card
            style={{
              margin: 50,
              marginLeft: "10%",
              marginRight: "0%",
              width: "80%",
              borderRadius: 45,
              borderWidth: 2.0,
              marginTop: 20,
              paddingInline: 10,
              background: "rgba(231, 238, 238, 0.9)",
            }}
          >
            <Card.Body>
              <Form onSubmit={submitHandler}>
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}

                <Form.Group controlId="siteId">
                  <Form.Label>siteId</Form.Label>
                  <Form.Control
                    type="siteId"
                    value={siteId}
                    placeholder="Enter the Site Id"
                    onChange={(e) => setSiteId(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="Name">
                  <Form.Label>siteName</Form.Label>
                  <Form.Control
                    value={siteName}
                    placeholder="Enter the siteName"
                    // rows={4}
                    onChange={(e) => setSiteName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="SiteAddress">
                  <Form.Label>SiteAddress</Form.Label>
                  <Form.Control
                    as="textarea"
                    type="SiteAddress"
                    value={siteAddress}
                    placeholder="Enter the Site Address "
                    onChange={(e) => setSiteAddress(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="siteContactNumber">
                  <Form.Label>siteContactNumber</Form.Label>
                  <Form.Control
                    type="number"
                    value={siteContactNumber}
                    min="1"
                    max="20"
                    onChange={(e) => setSiteContactNumber(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="tips">
                  <Form.Label>Budget</Form.Label>
                  <Form.Control
                    type="tips"
                    value={budget}
                    placeholder="Enter the tips"
                    onChange={(e) => setBudget(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="siteManager">
                  <Form.Label>site Manager</Form.Label>
                  <Form.Control
                    type="tips"
                    value={siteManager}
                    placeholder="Enter the site Manager"
                    onChange={(e) => setSiteManager(e.target.value)}
                    required
                  />
                </Form.Group>
                <br></br>

                {loading && <Loading size={50} />}

                <Button type="submit" variant="success">
                  Submit
                </Button>

                <Button
                  className="mx-2"
                  onClick={resetHandler}
                  variant="danger"
                >
                  Reset
                </Button>
                <Button variant="info" onClick={demoHandler}>
                  Demo
                </Button>
              </Form>
              <br></br>
            </Card.Body>
          </Card>
          <br></br>
          <br></br>
        </MainScreen>
      </div>
    );
        
  } else {
    return (
      <div className="denied">
        <MainScreen />
        <br></br>
      </div>
    );
  }
}
