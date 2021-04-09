/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom'

const Sidebar = () => (

    <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <Link to="/" className="brand-link">
            <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
            <span className="brand-text font-weight-light">AdminLTE 3</span>
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
            {/* Sidebar Menu */}
            <nav className="mt-2">

                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <i className="nav-icon fas fa-home" />
                            <p>
                                Home
                            </p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">
                            <i className="nav-icon fas fa-info" />
                            <p>
                                About
                            </p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href="/fake" className="nav-link">
                            <i className="nav-icon fas fa-file" />
                            <p>
                                Page with Banner<span className="right badge badge-danger">New</span>
                            </p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/fake" className="nav-link">
                            <i className="nav-icon fas fa-circle" />
                            <p>
                                Level 1
              <i className="right fas fa-angle-left" />
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <a href="/fake" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Level 2</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/fake" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>
                                        Level 2
                  <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="/fake" className="nav-link">
                                            <i className="far fa-dot-circle nav-icon" />
                                            <p>Level 3</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/fake" className="nav-link">
                                            <i className="far fa-dot-circle nav-icon" />
                                            <p>Level 3</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/fake" className="nav-link">
                                            <i className="far fa-dot-circle nav-icon" />
                                            <p>Level 3</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="/fake" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Level 2</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
    </aside>


);

export default Sidebar;