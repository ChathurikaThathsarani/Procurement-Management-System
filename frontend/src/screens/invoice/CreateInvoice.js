import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createInvoiceAction } from "../../actions/invoiceAction";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { authHeader } from "../../actions/staffAction";
import MainScreen from "../../components/MainScreen";
import "./invoice.css";

export default function CreateInvoice({ match, history }) {
  const [orderNo, setOrderNo] = useState("");
  const [bank, setBank] = useState("");
  const [branch, setBranch] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [depositAmount, setDepositAmount] = useState("");
  const [depositDate, setDepositDate] = useState("");

  const dispatch = useDispatch();
  const staff_Login = useSelector((state) => state.staff_Login);
  const { staffInfo } = staff_Login;

  const invoiceCreate = useSelector((state) => state.invoiceCreate);
  const { loading, error } = invoiceCreate;

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/user/staff/order/${match.params.id}`, {
        headers: authHeader(),
      });

      setOrderNo(data.orderNo);
    };

    fetching();
  }, [match.params.id]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createInvoiceAction(
        orderNo,
        bank,
        branch,
        accountNumber,
        depositAmount,
        depositDate
      )
    );
    if (
      !orderNo ||
      !bank ||
      !branch ||
      !accountNumber ||
      !depositAmount ||
      !depositDate
    )
      return;
  };
  if (staffInfo) {
    return (
      <div className="createInvoice">
        <br></br>

        <MainScreen title="New Invoice">
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
            href="/invoice-placed-orders"
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

                <Form.Group controlId="bank">
                  <Form.Label
                    style={{
                      fontSize: 20,
                    }}
                  >
                    Bank
                  </Form.Label>
                  <Form.Control
                    style={{
                      height: 40,
                      fontSize: 18,
                    }}
                    required
                    value={bank}
                    onChange={(e) => setBank(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="branch">
                  <Form.Label
                    style={{
                      fontSize: 20,
                    }}
                  >
                    Branch
                  </Form.Label>
                  <Form.Control
                    style={{
                      height: 40,
                      fontSize: 18,
                    }}
                    type="branch"
                    required
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="accountNumber">
                  <Form.Label
                    style={{
                      fontSize: 20,
                    }}
                  >
                    Account Number
                  </Form.Label>
                  <Form.Control
                    style={{
                      height: 40,
                      fontSize: 18,
                    }}
                    type="accountNumber"
                    required
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="depositAmount">
                  <Form.Label
                    style={{
                      fontSize: 20,
                    }}
                  >
                    Deposit Amount
                  </Form.Label>
                  <Form.Control
                    style={{
                      height: 40,
                      fontSize: 18,
                    }}
                    type="number"
                    required
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="depositDate">
                  <Form.Label
                    style={{
                      fontSize: 20,
                    }}
                  >
                    Deposit Date
                  </Form.Label>
                  <Form.Control
                    style={{
                      height: 40,
                      fontSize: 18,
                    }}
                    type="date"
                    required
                    value={depositDate}
                    onChange={(e) => setDepositDate(e.target.value)}
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
