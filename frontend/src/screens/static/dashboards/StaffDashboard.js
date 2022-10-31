import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { staffLogout } from "../../../actions/staffAction";
import "./Dashboard.css";
import MainScreen from "../../../components/MainScreen";

const StaffDashboard = ({ history }) => {
  const staff_Login = useSelector((state) => state.staff_Login);
  const { staffInfo } = staff_Login;
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(staffLogout());
    history.push("/");
  };

  if (staffInfo) {
    return (
      <div className="staffBackground">
        <br></br>
        <MainScreen title={`Welcome Back ${staffInfo && staffInfo.name}..`}>
          <Button
            variant="danger"
            onClick={logoutHandler}
            className="logoutBtn"
            style={{
              float: "right",
              marginTop: 3,
              fontSize: 15,
              borderRadius: 0,
              width: 100,
            }}
          >
            Logout
          </Button>

          <br></br>
          <br></br>

          <div className="loginContainer">
            <Card
              style={{
                borderRadius: 45,
                borderWidth: 2.0,
                marginTop: 20,
                paddingInline: 10,
                background: "rgba(231, 238, 238, 0.8)",
                marginLeft: "10%",
                marginRight: "10%",
                width: "60%",
              }}
            >
              <div className="intro-text">
                <br></br>
                <br></br>
                <div>
                  <Link to="/staff-orders">
                    <Button
                      variant="success"
                      size="lg"
                      className="landingbutton"
                      style={{
                        width: 350,
                        height: 75,
                        backgroundColor: "black",
                        borderRadius: 0,
                        border: "1px solid white",
                      }}
                    >
                      Order Management
                    </Button>
                  </Link>
                </div>
                <br></br>
                <div>
                  <Link to="/site-management-view">
                    <Button
                      variant="success"
                      size="lg"
                      className="landingbutton"
                      style={{
                        width: 350,
                        height: 75,
                        backgroundColor: "black",
                        borderRadius: 0,
                        border: "1px solid white",
                      }}
                    >
                      Site Management
                    </Button>
                  </Link>
                </div>
                <br></br>
                <div>
                  <Link to="/good-receipts">
                    <Button
                      variant="success"
                      size="lg"
                      className="landingbutton"
                      style={{
                        width: 350,
                        height: 75,
                        backgroundColor: "black",
                        borderRadius: 0,
                        border: "1px solid white",
                      }}
                    >
                      Good Receipt Management
                    </Button>
                  </Link>
                </div>
                <br></br>
                <div>
                  <Link to="/invoices">
                    <Button
                      variant="success"
                      size="lg"
                      className="landingbutton"
                      style={{
                        width: 350,
                        height: 75,
                        backgroundColor: "black",
                        borderRadius: 0,
                        border: "1px solid white",
                      }}
                    >
                      Invoice Management
                    </Button>
                  </Link>
                </div>
                <br></br>
                <br></br>
              </div>
            </Card>
          </div>
        </MainScreen>
        <br></br>
        <br></br>
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
};

export default StaffDashboard;
