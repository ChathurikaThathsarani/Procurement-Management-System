import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createGoodReceiptAction } from "../../actions/goodReceiptAction";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { authHeader } from "../../actions/staffAction";
import MainScreen from "../../components/MainScreen";
import "./goodReceipt.css";

export default function CreateGoodReceipt({ match, history }) {
  const [orderNo, setOrderNo] = useState("");
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  const dispatch = useDispatch();
  const staff_Login = useSelector((state) => state.staff_Login);
  const { staffInfo } = staff_Login;

  const goodReceiptCreate = useSelector((state) => state.goodReceiptCreate);
  const { loading, error } = goodReceiptCreate;

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/user/staff/order/${match.params.id}`, {
        headers: authHeader(),
      });

      setOrderNo(data.orderNo);
      setProductName(data.productName);
    };

    fetching();
  }, [match.params.id]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createGoodReceiptAction(
        orderNo,
        productName,
        productQuantity,
        deliveryDate
      )
    );
    if (!orderNo || !productName || !productQuantity || !deliveryDate) return;
  };
  if (staffInfo) {
    return (
      <div className="createGoodReceipt">
        <br></br>

        <MainScreen title="New Good Receipt">
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
            href="/placed-orders"
          >
            {" "}
            Placed Orders
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
              <Form onSubmit={submitHandler}>
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                <Form.Group controlId="orderNo">
                  <Form.Label
                    style={{
                      fontSize: 20,
                    }}
                  >
                    Order No
                  </Form.Label>
                  <Form.Control
                    style={{
                      height: 40,
                      fontSize: 18,
                    }}
                    type="orderNo"
                    value={orderNo}
                    readonly
                  />
                </Form.Group>

                <Form.Group controlId="productName">
                  <Form.Label
                    style={{
                      fontSize: 20,
                    }}
                  >
                    Product Name
                  </Form.Label>
                  <Form.Control
                    style={{
                      height: 40,
                      fontSize: 18,
                    }}
                    required
                    value={productName}
                    readOnly
                  />
                </Form.Group>

                <Form.Group controlId="productQuantity">
                  <Form.Label
                    style={{
                      fontSize: 20,
                    }}
                  >
                    Product Quantity
                  </Form.Label>
                  <Form.Control
                    style={{
                      height: 40,
                      fontSize: 18,
                    }}
                    type="number"
                    required
                    value={productQuantity}
                    onChange={(e) => setProductQuantity(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="deliveryDate">
                  <Form.Label
                    style={{
                      fontSize: 20,
                    }}
                  >
                    Delivery Date
                  </Form.Label>
                  <Form.Control
                    style={{
                      height: 40,
                      fontSize: 18,
                    }}
                    type="date"
                    required
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
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
