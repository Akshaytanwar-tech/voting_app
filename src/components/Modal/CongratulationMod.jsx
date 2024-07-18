import React from "react";
import "./Modal.css";
import Test from "./Test";

const CongratulationMod = ({ content, contentHeader }) => {
  return (
    <>
      <div
        class="modal fade"
        id="congratulationsModal"
        tabindex="-1"
        aria-labelledby="congratulationsModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content modal-content-exact">
            <div class="modal-header modal-header-exact">
              <h5 class="modal-title" id="congratulationsModalLabel">
                <b>{contentHeader}</b>
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body modal-body-exact text-center">
              <h4>
                <b>{content}</b>
              </h4>
            </div>
            <div class="modal-footer modal-footer-exact">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CongratulationMod;
