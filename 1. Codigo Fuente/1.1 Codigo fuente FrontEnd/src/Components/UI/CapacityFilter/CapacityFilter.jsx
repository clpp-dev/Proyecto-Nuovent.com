import React, { useState } from "react";

export const CapacityFilter = () => {
  const [activeCheckBox, setActiveCheckBox] = useState(0);

  function changeCheckBox(e) {
    setActiveCheckBox(parseInt(e.target.value));
  }

  return (
    <div className="d-flex gap-5 my-0 justify-content-center">
      <div className="list-group mx-0 mt-2 w-100">
        <label className="list-group-item d-flex gap-2">
          <input
            className="form-check-input flex-shrink-0"
            type="checkbox"
            value={10}
            checked={activeCheckBox === 10}
            onChange={changeCheckBox}
          />
          <span value="10">
            desde 10 hasta 50 personas
            <small className="d-block text-muted"></small>
          </span>
        </label>
        <label className="list-group-item d-flex gap-2">
          <input
            className="form-check-input flex-shrink-0"
            type="checkbox"
            value={50}
            checked={activeCheckBox === 50}
            onChange={changeCheckBox}
          />
          <span value="50">
            de 50 hasta 100 personas
            <small className="d-block text-muted"></small>
          </span>
        </label>
        <label className="list-group-item d-flex gap-2">
          <input
            className="form-check-input flex-shrink-0"
            type="checkbox"
            value={100}
            checked={activeCheckBox === 100}
            onChange={changeCheckBox}
          />
          <span value="100">
            de 100 hasta 150 personas
            <small className="d-block text-muted"></small>
          </span>
        </label>
        <label className="list-group-item d-flex gap-2 w-100">
          <input
            className="form-check-input flex-shrink-0"
            type="checkbox"
            value={150}
            checked={activeCheckBox === 150}
            onChange={changeCheckBox}
          />
          <span value="150">
            mas de 150 personas
            <small className="d-block text-muted"></small>
          </span>
        </label>
      </div>
    </div>
  );
};
