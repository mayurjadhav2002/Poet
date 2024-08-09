import Notification from "@/components/dashboard/Notification";
import React from "react";

function NotificationPage() {
  return (
    <div className="w-4/5 mx-auto">
      <h3 className="text-lg font-semibold my-4 text-start font-sans">
        Notification
      </h3>
      <Notification/>
    </div>
  );
}

export default NotificationPage;
