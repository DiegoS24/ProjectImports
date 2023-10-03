import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './styles/App.css';

interface DonutChartProps {
  used: number;
  total: number;
}

const DonutChart: React.FC<DonutChartProps> = ({ used, total }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const drawDonutChart = () => {
      const width = 500;
      const height = 500;
      const startChart = Math.PI;
      const endChart = 3 * Math.PI;
      const twoPie = 2 * Math.PI;

      const usedPercent = used / total;
      const activeColor = '#2DEDF9';
      const inactiveColor = '#edecec';

      const arc = d3.arc()
        .innerRadius(30)
        .outerRadius(60)
        .startAngle(startChart);

      const svg = d3.select(svgRef.current)
        .attr("width", width)
        .attr("height", height)
        .selectAll("g")
        .data([null]) // Bind data to a single element to ensure only one group is created
        .enter()
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

      const background = svg.append("path")
        .datum({ endAngle: endChart })
        .style("fill", inactiveColor)
        .attr("d", arc.toString());

      const foreground = svg.append("path")
        .datum({ endAngle: startChart })
        .style("fill", activeColor)
        .attr("d", arc.toString());

      const newNum = (twoPie * usedPercent) + startChart;

      foreground.transition()
        .duration(750)
        .call(arcTween, newNum);

      function arcTween(transition: any, newAngle: number) {
        transition.attrTween("d", function(d: any) {
          const interpolate = d3.interpolate(d.endAngle, newAngle);
          return function(t: any) {
            d.endAngle = interpolate(t);
            return arc(d);
          };
        });
      }
    };

    drawDonutChart();
  }, [used, total]);

  return (
    <div className="wrapper">
      <svg ref={svgRef} className="donut__graph"></svg>
    </div>
  );
};

export default DonutChart;