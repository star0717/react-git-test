import React, { useState } from "react";

function Alert() {
  return (
    <div className="alert alert-info shadow-lg">
      <div>
        <div className="text-white">
          <i className="fa-solid fa-circle-info"></i>
        </div>
        <span>12 unread messages. Tap to see.</span>
      </div>
    </div>
  );
}

function Notice() {
  return (
    <>
      <Alert />
      <br />
      <hr />
      <br />
      <Alert />
    </>
  );
}

export default Notice;
