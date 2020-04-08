import React from 'react';

class Chart extends React.Component {
  render() {
    window.onload = function chart() {
      const charts = new CanvasJS.Chart('chartContainers', {
        title: {
          text: '',
        },
        data: [
          {
            type: 'line',

            dataPoints: [
              { x: 1, y: 450 },
              { x: 2, y: 214 },
              { x: 3, y: 520 },
              { x: 4, y: 460 },
              { x: 5, y: 350 },
              { x: 6, y: 500 },
              { x: 7, y: 480 },
              { x: 8, y: 280 },
              { x: 9, y: 410 },
              { x: 10, y: 500 },
              { x: 11, y: 480 },
              { x: 12, y: 510 },
            ],
          },
        ],
      });

      charts.render();
    };

    return (
      <div id="chartContainers" style={{ height: '300px', width: '100%' }} />
    );
  }
}

export default Chart;
