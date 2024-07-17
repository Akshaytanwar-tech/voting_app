import React from "react";
import deleteCandidate from "../../Apis/candidate/deleteCandidate";

const CandidateCard = ({ e, candidates }) => {
  const handleEdit = () => {};
  const handleDelete = (id) => {
    deleteCandidate(id);
  };
  return (
    <>
      <div class="container mt-5">
        <div class="card">
          <div class="card-body d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <img
                src={e.photo}
                class="rounded-circle mr-3"
                alt="Profile Photo"
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                }}
              />
              <span className="mx-2">{e.name}</span>
            </div>
            <div>
              <button
                class="btn btn-outline-secondary btn-sm mr-2 mx-1"
                onClick={handleEdit}
              >
                <i class="fas fa-edit"></i>
              </button>
              <button
                class="btn btn-outline-danger btn-sm mx-1"
                onClick={() => {
                  handleDelete(e._id);
                }}
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidateCard;
