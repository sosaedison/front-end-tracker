import React, { useState, useEffect } from "react";
import DashboardManager from './DashboardManager';

export default function Dashboard(props) {
  const {user} = props;
  const [isLoggedIn, setIsLoggedIn] = useState([]);

  return (
    <DashboardManager user={user}/>
  );
}
