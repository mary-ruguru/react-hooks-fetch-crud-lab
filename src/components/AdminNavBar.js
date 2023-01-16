import React from "react";

function AdminNavBar({ pageChange }) {
  return (
    <nav>
      <button onClick={() => pageChange("Form")}>New Question</button>
      <button onClick={() => pageChange("List")}>View Questions</button>
    </nav>
  );
}

export default AdminNavBar;
