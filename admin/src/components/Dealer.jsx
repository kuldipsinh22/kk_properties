  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { Link } from "react-router-dom";
  import Footer from "./Footer";

  export default function Dealer() {
    const [dealer, setDealers] = useState([]);
    // let i = 1;
    useEffect(() => {
      getDealers();
    }, []);
    const getDealers = async () => {
      const res = await axios.get("http://localhost:1122/kk/dealer");
      setDealers(res.data);
      console.log(res.data);
    };
    const deleteDealers = async (id) => {
      let ans = window.confirm("are you sure?");
      if (ans) {
        const res = await axios.delete("http://localhost:1122/kk/dealer/" + id);
        console.log(res.data);
        alert(res.data);
        getDealers();
      }
    };
    return (
      <div
        style={{ marginTop: "50px", marginLeft: "290px", marginRight: "20px" }}
      >
        <div class="row">
          <div class="col-12">
            <div class="card mb-4">
              <div class="card-header pb-0">
                <h2>Dealer table</h2>
                <li class="nav-item d-flex align-items-center">
                  <Link
                    class="btn btn-outline-primary btn-sm mb-0 me-3"
                    to="/Add_dealer"
                  >
                    Add dealer
                  </Link>
                </li>
              </div>
              <div class="card-body px-0 pt-0 pb-2">
                <div class="table-responsive p-0">
                  <table class="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Name
                        </th>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                          Contact
                        </th>
                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Status
                        </th>
                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          City
                        </th>
                        <th class="text-secondary opacity-7"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {dealer.map((dealer) => (
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div>
                                <img
                                  src={`http://localhost:1122/uploads/${dealer.img}`}
                                  class="avatar avatar-sm me-3"
                                  alt="user1"
                                />
                              </div>
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="mb-0 text-sm">{dealer.acc_name}</h6>
                                <p class="text-xs text-secondary mb-0">
                                  {dealer.dealer_email}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-s font-weight-bold mb-0">
                              {dealer.contact}
                            </p>
                          </td>

                          {dealer.status == "1" ? (
                            <td class="align-middle text-center text-sm">
                              <span class="badge badge-sm bg-gradient-success">
                                Active
                              </span>
                            </td>
                          ) : (
                            <td class="align-middle text-center text-sm">
                              <span class="badge badge-sm bg-gradient-secondary">
                                Inactive
                              </span>
                            </td>
                          )}
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold">
                              Bhavnagar
                            </span>
                          </td>
                          <td class="align-middle">
                            <div class="ms-auto">
                              <a
                                href="/dealer"
                                class="btn btn-link text-danger text-gradient px-3 mb-0"
                                onClick={() => deleteDealers(dealer.dealer_id)}
                              >
                                <i class="far fa-trash-alt me-2"></i>
                                Delete
                              </a>
                              <Link to={`/Add_dealer/` + dealer.dealer_id}>
                                <i
                                  class="fas fa-pencil-alt text-dark me-2"
                                  aria-hidden="true"
                                ></i>
                                Edit
                              </Link>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
