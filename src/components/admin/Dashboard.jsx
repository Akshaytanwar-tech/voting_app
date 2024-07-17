import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getUsers from "../../Apis/auth/getUsers";
import getCandidates from "../../Apis/candidate/getCandidates";
const Dashboard = () => {
  const [users, setusers] = useState(0);
  const [candidateCount, setCandidateCount] = useState(0);
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    getUsers().then((res) => {
      setusers(res.length);
    });
    getCandidates().then((res) => {
      setCandidates(res);
      setCandidateCount(res.length);
    });
  }, []);
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid d-flex justify-content-center">
          <span class="navbar-brand mb-0 h1 text-brown">Admin Dashboard</span>
        </div>
      </nav>
      <div class="container px-4 text-center my-3">
        <div class="row gx-5">
          <div class="col">
            <div class="p-3 border border-dark">Total voters:- {users}</div>
          </div>
          <div class="col">
            <div class="p-3 border border-dark">
              Total Candidate:- {candidateCount}
            </div>
          </div>
        </div>
      </div>
      <div className="container my-4">
        <h1 className="my-3 text-center">Voters and votes</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Seiral No.</th>
              <th scope="col">Candidate name</th>
              <th scope="col">Total Votes</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((e, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i}</th>
                  <td>{e.name}</td>
                  <td>{e.votes.length}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="container">
        <Link className="btn btn-primary" to="/dashboard/candidate">
          Manage Candidates 👉
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
