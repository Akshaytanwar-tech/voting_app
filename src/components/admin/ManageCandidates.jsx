import React, { useEffect, useState } from "react";
import addCandidate from "../../Apis/candidate/addCandidate";
import fetchCandidate from "../../Apis/candidate/fetchCandidates";
import CandidateCard from "./CandidateCard";

const ManageCandidates = () => {
  const [candidates, setcandidates] = useState([]);
  const [credential, setCrediantial] = useState({
    name: "",
    party: "",
    age: "",
    photo: null,
  });
  useEffect(() => {
    fetchCandidate().then((res) => {
      setcandidates(res);
    });
  }, []);
 
  const handleOnChange = (e) => {
    const value =
      e.target.name === "photo" ? e.target.files[0] : e.target.value;
    setCrediantial({ ...credential, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", credential.name);
    formData.append("party", credential.party);
    formData.append("age", credential.age);
    formData.append("photo", credential.photo);
    addCandidate(formData);
    setCrediantial({
      name: "",
      party: "",
      age: "",
      photo: null,
    });
  };

  return (
    <>
      <div className="container d-flex my-5">
        <div className="container">
          <h1 className="px-5">Add a Candidate</h1>
          <div className="container mt-3">
            <div
              className="card"
              style={{
                width: "24rem",
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={credential.name}
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Party Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="party"
                    name="party"
                    value={credential.party}
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Age
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="name"
                    name="age"
                    value={credential.age}
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="photo" className="form-label">
                    Photo
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    name="photo"
                    id="photo"
                    accept="image/*"
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="text-center h1">list of candidates</div>
          {candidates.map((e) => {
            return (
              <>
                <CandidateCard candidates={candidates} e={e} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ManageCandidates;
