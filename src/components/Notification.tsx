import React, { useState } from "react";

interface NotificationProps {
  message: string;
}

export function Notification({ message }: NotificationProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  } else {
    return (
      <div className="notice">
        <span>{message}</span>
        <button className="notice-close" onClick={() => setVisible(false)}>
          X
        </button>
      </div>
    );
  }
}
