import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateSiteAction } from "../../actions/siteAction";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { authHeader } from "../../actions/staffAction";
import MainScreen from "../../components/MainScreen";
import "./siteMangement.css";

export default function SiteUpdate({ match, history }) {
  const [siteId, setSiteId] = useState("");
  const [siteName, setSiteName] = useState("");
  const [siteAddress, setSiteAddress] = useState("");
  const [siteContactNumber, setSiteContactNumber] = useState("");
  const [budget, setBudget] = useState("");
  const [siteManager, setSiteManager] = useState("");

  const dispatch = useDispatch();
  const staff_Login = useSelector((state) => state.staff_Login);
  const { staffInfo } = staff_Login;

  const Site_Management_Update = useSelector(
    (state) => state.Site_Management_Update
  );
  const { loading, error } = Site_Management_Update;

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(
        `/user/staff/order/${match.params.id}`,
        {
          headers: authHeader(),
        }
      );
      console.log(data);
      setSiteId(data.siteId);
      setSiteName(data.siteName);
     setSiteAddress(data.siteAddress);
     setSiteContactNumber(data.siteContactNumber);
    setBudget(data.budget);
    setSiteManager(data.siteManager);
    };

   	fetching();
	}, [match.params.id]);



  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateSiteAction(
        match.params.id,
        siteId,
        siteName,
        siteAddress,
        siteContactNumber,
        budget,
        siteManager
      )
    );
    if (!siteId || !siteName || !siteAddress || !siteContactNumber || !budget || !siteManager)
      return;
  };
  if (staffInfo) {
    return (
      <div className="SiteBackgroundCreate">
        <br></br>

        <MainScreen title="Edit Site Information">
          <br></br>
          <Button
            variant="success"
            style={{
              marginBottom: 6,
              fontSize: 15,
              backgroundColor: "black",
              borderRadius: 0,
              border: "1px solid white",
              height: 40,
            }}
            href="/"
          >
            {" "}
            Back to Site List
          </Button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Card
            style={{
              marginLeft: 60,
              width: "70%",
              borderWidth: 0,
              padding: 25,
              outline: "none",
              background: "rgba(231, 238, 238, 0.8)",
              borderRadius: 0,
            }}
          >
            <Card.Body>
              <Form onSubmit={updateHandler}>
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}

                <Form.Group controlId="siteId">
                  <Form.Label
                    style={{
                      fontSize: 20,
                    }}
                  >
                    siteId
                  </Form.Label>
                  <Form.Control
                    style={{
                      height: 40,
                      fontSize: 18,
                    }}
                    type="siteId"
                    value={siteId}
                  />
                </Form.Group>

                <Form.Group controlId="sitename">
                  <Form.Label
                    style={{
                      fontSize: 20,
                    }}
                  >
                    Site Name
                  </Form.Label>
                  <Form.Control
                    style={{
                      height: 40,
                      fontSize: 18,
                    }}
                    type="sitename"
                    value={siteName}
                  />
                </Form.Group>

                <Form.Group controlId="SiteAddress">
                  <Form.Label
                    style={{
                      fontSize: 20,
                    }}
                  >
                    SiteAddress
                  </Form.Label>
                  <Form.Control
                    style={{
                      height: 40,
                      fontSize: 18,
                    }}
                    required
                    value={siteAddress}
                  />
                </Form.Group>

                <Form.Group controlId="placedDate">
                  <Form.Label
                    style={{
                      fontSize: 20,
                    }}
                  >
                    siteContactNumber
                  </Form.Label>
                  <Form.Control
                    style={{
                      height: 40,
                      fontSize: 18,
                    }}
                    type="siteContactNumber"
                    required
                    value={siteContactNumber}
                  />
                </Form.Group>
                <Form.Group controlId="requiredDate">
                  <Form.Label
                    style={{
                      fontSize: 20,
                    }}
                  >
                    Budget
                  </Form.Label>
                  <Form.Control
                    style={{
                      height: 40,
                      fontSize: 18,
                    }}
                    type="budget"
                    required
                    value={budget}
                  />
                </Form.Group>

                <Form.Group controlId="siteManager">
                  <Form.Label
                    style={{
                      fontSize: 20,
                    }}
                  >
                    siteManager
                  </Form.Label>
                  <Form.Control
                    style={{
                      height: 40,
                      fontSize: 18,
                    }}
                    type="siteManager"
                    required
                    value={siteManager}
                  />
                </Form.Group>

                {loading && <Loading size={50} />}
                <Button
                  style={{
                    width: 100,
                    height: 40,
                    backgroundColor: "black",
                    borderRadius: 0,
                    border: "3px solid white",
                  }}
                  type="submit"
                  variant="primary"
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <br></br>
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
