import {Link, useHistory } from "react-router-dom";
import {Button,Row,Col,ButtonGroup,Form,} from "react-bootstrap";
import Table from "react-bootstrap/Table"; 
import MainScreen from "../../components/MainScreen";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSiteAction, listsiteAction } from "../../actions/siteAction";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import "./siteMangement.css";
import swal from "sweetalert";

export default function SiteList() {
  const dispatch = useDispatch();
  const staff_Login = useSelector((state) => state.staff_Login);

  const { staffInfo } = staff_Login;
  const site_list = useSelector((state) => state.site_list);
  const { loading, SiteManagementList, error } = site_list;


  const Site_Management_Update = useSelector((state) => state.Site_Management_Update);
  const { success: successUpdate } = Site_Management_Update;

  const site_delete = useSelector((state) => state.site_delete);
  const {loading: loadingDelete,error: errorDelete,success: successDelete, } = site_delete;
  console.log(SiteManagementList);

  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
  };
  const deleteHandler = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover these details!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          dispatch(deleteSiteAction(id));
          swal({
            title: "Success!",
            text: "Deleted Site Successfully",
            icon: "success",
            timer: 2000,
            button: false,
          });
          history.push("/");
        }
      })
      .catch((err) => {
        swal({
          title: "Error!",
          text: "Couldn't Delete Site",
          type: "error",
        });
      });
  };

  const history = useHistory();
  useEffect(() => {
    dispatch(listsiteAction());
  }, [dispatch, staffInfo,successUpdate, successDelete, history]);
  if (staffInfo) {
    return (
      <div className="SiteBackgroundView">
        <MainScreen title="Site List">
          <div style={{ minHeight: 700, marginTop: 50 }} className="">
            <div className="search" style={{ marginTop: 50 }}>
              <Form inline>
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={searchHandler}
                  style={{
                    width: 260,
                    height: 40,
                    borderRadius: 50,
                    padding: "10px",
                    paddingLeft: "15px",
                    marginLeft: 900,
                  }}
                />
              </Form>
            </div>
            <br></br>
            <div>
              <Row>
                <Col>
                  <Link to="/">
                    <Button
                      variant="success"
                      style={{
                        marginBottom: 6,
                        fontSize: 15,
                        backgroundColor: "black",
                        borderRadius: 0,
                        border: "1px solid white",
                      }}
                      size="lg"
                    >
                      + New Draft Order
                    </Button>
                  </Link>
                </Col>
              </Row>
            </div>

            <br />
            {errorDelete && (
              <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
            )}
            {loadingDelete && <Loading />}
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {loading && <Loading />}
            <Table style={{ background: "white" }}>
              <>
                <thead>
                  <tr
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                      height: 60,
                    }}
                  >
                    <th
                      style={{
                        width: 30,
                        fontSize: 20,
                      }}
                    >
                      Site Name
                    </th>
                    <th
                      style={{
                        width: 50,
                        fontSize: 20,
                      }}
                    >
                      siteContactNumber
                    </th>
                    <th
                      style={{
                        width: 50,
                        fontSize: 20,
                      }}
                    >
                      Budget
                    </th>
                    <th
                      style={{
                        width: 10,
                        fontSize: 20,
                      }}
                    >
                      site Manager
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {SiteManagementList?.reverse()
                    .filter((filteredB) => filteredB.siteName.includes(search))
                    .map((siteManagements) => (
                      <tr
                        key={siteManagements._id}
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                        }}
                      >
                        <td
                          style={{
                            fontSize: 20,
                          }}
                        >
                          {siteManagements.siteName}
                        </td>
                        <td
                          style={{
                            fontSize: 20,
                          }}
                        >
                          {siteManagements.siteContactNumber}
                        </td>
                        <td
                          style={{
                            fontSize: 20,
                          }}
                        >
                          {siteManagements.budget}
                        </td>
                        <td
                          style={{
                            fontSize: 20,
                          }}
                        >
                          {siteManagements.siteManager}
                        </td>
                        <td
                          style={{
                            fontSize: 20,
                          }}
                        >
                          {siteManagements.status}
                        </td>
                        <td>
                          &emsp;
                          <span
                            onClick={() => deleteHandler(siteManagements._id)}
                          >
                            <i
                              class="fa-solid fa-trash"
                              onClick={() => deleteHandler(siteManagements._id)}
                            ></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </>
            </Table>
            <br></br>
          </div>
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
