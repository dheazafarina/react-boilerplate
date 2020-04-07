import React from 'react';

function Sidebar() {
  return (
    <div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link" href="/">
            HOME
          </a>
        </li>
        <div className="dropdown-divider" />
        <li className="nav-item">
          <div>LEARNING</div>
          <a className="nav-link" href="/">
            <i className="mr-2 fa fa-diamond" aria-hidden="true" />
            Courses
            <span className="float-right badge badge-danger badge-secondary">
              21
            </span>
          </a>
          <a className="nav-link" href="/">
            <i className="mr-2 fa fa-usb" aria-hidden="true" />
            Learning Plans
          </a>
        </li>
        <div className="dropdown-divider" />
        <li className="nav-item">
          <div>MANAGE</div>
          <a className="nav-link" href="/">
            <i className="mr-2 fa fa-user" aria-hidden="true" />
            Users
          </a>
          <a className="nav-link" href="/">
            <i className="mr-2 fa fa-area-chart" aria-hidden="true" />
            Skills
          </a>
          <a className="nav-link" href="/">
            <i className="mr-2 fa fa-area-chart" aria-hidden="true" />
            Report
          </a>
          <a className="nav-link" href="/">
            <i className="mr-2 fa fa-line-chart" aria-hidden="true" />
            Analitycs
          </a>
          <a className="nav-link" href="/">
            <i className="mr-2 fa fa-bullhorn" aria-hidden="true" />
            Announcements
          </a>
        </li>
        <div className="dropdown-divider" />
        <li className="nav-item">
          <div>CONFIGURE</div>
          <a className="nav-link" href="/">
            <i className="mr-2 fa fa-star-half-o" aria-hidden="true" />
            Points
          </a>
          <a className="nav-link" href="/">
            <i className="mr-2 fa fa-trophy" aria-hidden="true" />
            Reward
          </a>
          <a className="nav-link" href="/">
            <i className="mr-2 fa fa-envelope-o" aria-hidden="true" />
            Email templates
          </a>
          <a className="nav-link" href="/">
            <i className="mr-2 fa fa-info-circle" aria-hidden="true" />
            Company info
          </a>
          <a className="nav-link" href="/">
            <i className="mr-2 fa fa-sticky-note" aria-hidden="true" />
            Billing
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
