import React from "react";

const Notifications = ({ notifications, onClick }) => {
  return (
    <div className="notifications">
      {!notifications && (
        <div>
          <span onClick={onClick} className="link">
            Enable notifications
          </span>
          <span className="spacer">|</span>
        </div>
      )}
    </div>
  );
};

export default Notifications;
