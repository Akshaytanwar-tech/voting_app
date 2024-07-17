import React, { useEffect, useState } from "react";
import fetchCandidate from "../Apis/candidate/fetchCandidates";
import vote from "../Apis/vote/vote";
import profile from "../Apis/auth/profile";

const CandidateList = () => {
  const [candidate, setCandidates] = useState([]);
  const [isvoted, setisVoted] = useState(false);
  console.log(isvoted);
  useEffect(() => {
    fetchCandidate().then((res) => {
      setCandidates(res);
    });
    profile().then((res) => {
      setisVoted(res.isVoted);
    });
  }, [isvoted]);
  const HandleVote = (id) => {
    vote(id);
    window.location.reload();
  };
  return (
    <>
      <div class="jumbotron text-center">
        <div class="container">
          <h1 class="display-4 mb-4">Vote for Your Favorite Candidate</h1>
          <p class="lead">Choose wisely and make your voice heard!</p>
        </div>
      </div>
      <div class="container text-center my-5">
        <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
          {candidate.map((e) => {
            return (
              <>
                <div class="col">
                  <div className="container mt-5">
                    <div
                      className="card text-center"
                      style={{
                        width: "18rem",
                        border: "2px solid #4d94ff",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <img
                        src={e.photo}
                        alt="Party sign"
                        style={{
                          width: "150px",
                          height: "150px",
                          objectFit: "cover",
                          borderRadius: "50%",
                          margin: "20px auto",
                          border: "3px solid #4d94ff",
                        }}
                      />
                      <div
                        className="card-body"
                        style={{ backgroundColor: "#f0f8ff" }}
                      >
                        <h5 className="card-title">{e.name}</h5>
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            HandleVote(e._id);
                          }}
                          disabled={isvoted}
                        >
                          Vote Now 👆
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CandidateList;
