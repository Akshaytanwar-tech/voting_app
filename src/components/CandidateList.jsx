import React, { useEffect, useRef, useState } from "react";
import fetchCandidate from "../Apis/candidate/fetchCandidates";
import vote from "../Apis/vote/vote";
import profile from "../Apis/auth/profile";
import CongratulationMod from "./Modal/CongratulationMod";
import ReactLoading from "react-loading";

const CandidateList = () => {
  const [candidate, setCandidates] = useState([]);
  const [isvoted, setisVoted] = useState(false);
  const [modalContent, setModalcontent] = useState("");
  const [modalContentheader, setModalcontentheader] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    fetchCandidate().then((res) => {
      setCandidates(res);
      setloading(false);
    });
    profile().then((res) => {
      setisVoted(res.isVoted);
    });
  }, [isvoted]);

  // use ref hook to refer to the modal button.
  const ref = useRef(null);
  // Function to handle votes.
  const HandleVote = (id) => {
    vote(id).then((res) => {
      if (res.status == "ok") {
        setModalcontentheader("Congratulations!");
        setModalcontent(res.message);
      } else {
        setModalcontentheader("OOPS!");
        setModalcontent(res.message);
      }
    });
    ref.current.click();
  };
  return (
    <>
      <div class="jumbotron text-center">
        <div class="container">
          <h1 class="display-4 mb-4">Vote for Your Favorite Candidate</h1>
          <p class="lead">Choose wisely and make your voice heard!</p>
        </div>
      </div>
      {!loading ? (
        <div class="container text-center my-5">
          <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
            {candidate.map((e, i) => {
              return (
                <div class="col" key={i}>
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
                          // disabled={isvoted}
                        >
                          Vote Now 👆
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="container d-flex justify-content-center py-5 my-5">
          <div>
            <ReactLoading
              color={"black"}
              type={"spinningBubbles"}
              height={"100px"}
              width={"100px"}
            />
            <div className="py-3 h5">Please Wait...</div>
          </div>
        </div>
      )}
      <button
        type="button"
        class="btn btn-primary btn-primary-exact invisible"
        data-bs-toggle="modal"
        data-bs-target="#congratulationsModal"
        ref={ref}
      >
        Show Congratulations
      </button>
      <CongratulationMod
        content={modalContent}
        contentHeader={modalContentheader}
      />
    </>
  );
};

export default CandidateList;
