import React from "react";
import { Chart } from "react-charts";
import type { AxisOptions } from "react-charts";
import { TextContent } from "../../lang/TextContent";
import type { Record } from "../../models/Record.model";

interface Props {
  points: Record[];
}

const Graph: React.FC<Props> = ({ points }) => {
  const data = React.useMemo(
    () => [
      {
        label: TextContent.results,
        data: points,
      },
    ],
    [points]
  );

  const primaryAxis = React.useMemo<AxisOptions<Record>>(
    () => ({
      min: 1,
      max: points.length,
      getValue: (data) => data.index,
      scaleType: "linear",
    }),
    []
  );

  const secondaryAxes = React.useMemo<AxisOptions<Record>[]>(
    () => [
      { min: 0, max: 100, getValue: (data) => data.value, scaleType: "linear" },
    ],
    []
  );

  return (
    <div style={{ width: "100%", height: 300, background: "white" }}>
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
        }}
      />
    </div>
  );
};

export default Graph;
