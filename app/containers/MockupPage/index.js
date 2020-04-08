/*
 * MockupPage
 *
 * List all the mockup
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Data from './data';
// import Chart from './chart';

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
            <div className="row px-4 py-2">
              <div className="col-2" style={{ fontSize: '11px' }}>
                Users
                <p className="mb-0 font-weight-bold number">58K</p>
                <p className="text-success">10,2%</p>
              </div>
              <div className="col" style={{ fontSize: '11px' }}>
                Course Completed
                <p className="mb-0 font-weight-bold number">5,700</p>
                <p className="text-success">10,2%</p>
              </div>
              <div className="col-4" style={{ fontSize: '11px' }}>
                Learning Plan Completed
                <p className="mb-0 font-weight-bold number">1,120</p>
                <p className="text-danger">10,2%</p>
              </div>
              <div className="col" style={{ fontSize: '11px' }}>
                Learning Hour
                <p className="mb-0 font-weight-bold number">22m 40s</p>
                <p className="text-success">10,2%</p>
              </div>
            </div>
            {/* un-command this line to see chart */}
            {/* <Chart /> */}
          </div>
        </div>
        <div className="col-4">
          <Data />
        </div>
      </div>

      <div className="row mb-4">
        <div className="col">
          <div>What course do your users visit?</div>
          <div className="card">
            <div className="card-body">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Courses</th>
                    <th scope="col" className="text-right">
                      Completed
                    </th>
                    <th scope="col" className="text-right">
                      Completion %
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-success">Course A</td>
                    <td className="text-right">1092</td>
                    <td className="text-right">56,4%</td>
                  </tr>
                  <tr>
                    <td className="text-success">Course B</td>
                    <td className="text-right">231</td>
                    <td className="text-right">39%</td>
                  </tr>
                  <tr>
                    <td className="text-success">Course C</td>
                    <td className="text-right">232</td>
                    <td className="text-right">60%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer text-right text-uppercase text-success">
              Course Report
            </div>
          </div>
        </div>
        <div className="col">
          <div>Who is your more active user?</div>
          <div className="card">
            <div className="card-body">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Users</th>
                    <th scope="col" className="text-right">
                      Completed
                    </th>
                    <th scope="col" className="text-right">
                      Point
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-success">John</td>
                    <td className="text-right">1092</td>
                    <td className="text-right">210.088</td>
                  </tr>
                  <tr>
                    <td className="text-success">Audrey</td>
                    <td className="text-right">231</td>
                    <td className="text-right">12.009</td>
                  </tr>
                  <tr>
                    <td className="text-success">Luke</td>
                    <td className="text-right">232</td>
                    <td className="text-right">7.097</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer text-right text-uppercase text-success">
              User Report
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
