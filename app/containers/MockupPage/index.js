/*
 * MockupPage
 *
 * List all the mockup
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function MockupPage() {
  return (
    <div>
      <Helmet>
        <title>Mockup Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <div className="row">
        <div className="col-8">
          <div className="card">
            <div className="card-header">Featured</div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="mb-4 card active-user" style={{ width: '18rem' }}>
            <div className="card-body">
              <h6>Active User Right Now</h6>
              <div className="card-subtitle mb-2" style={{ fontSize: '50px' }}>
                479
              </div>
              <div className="card-text">Page view per minutes</div>
              <hr />
              <table className="table table-sm table-user">
                <thead>
                  <tr>
                    <th scope="col">Top Active Page</th>
                    <th scope="col">Active User</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>/home/</td>
                    <td>34</td>
                  </tr>
                  <tr>
                    <td>/home/course/</td>
                    <td>29</td>
                  </tr>
                  <tr>
                    <td>/about/</td>
                    <td>11</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div>What course do your users visit?</div>
          <div className="card">
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Courses</th>
                    <th scope="col">Completed</th>
                    <th scope="col">Completion %</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Course A</td>
                    <td>1092</td>
                    <td>56,4%</td>
                  </tr>
                  <tr>
                    <td>Course B</td>
                    <td>231</td>
                    <td>39%</td>
                  </tr>
                  <tr>
                    <td>Course C</td>
                    <td>232</td>
                    <td>60%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer">Course Report</div>
          </div>
        </div>
        <div className="col">
          <div>Who is your more active user?</div>
          <div className="card">
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Users</th>
                    <th scope="col">Completed</th>
                    <th scope="col">Point</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John</td>
                    <td>1092</td>
                    <td>210.088</td>
                  </tr>
                  <tr>
                    <td>Audrey</td>
                    <td>231</td>
                    <td>12.009</td>
                  </tr>
                  <tr>
                    <td>Luke</td>
                    <td>232</td>
                    <td>7.097</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer">User Report</div>
          </div>
        </div>
      </div>
    </div>
  );
}
