import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
        <i className="fas fa-home" style={{ color: "white" }}></i>
        </Link>
      </div>
    </nav>
  );
}
