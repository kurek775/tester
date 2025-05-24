import React from "react";
import { Chart } from "react-charts";
import type { AxisOptions } from "react-charts";
import type { Record } from "../utils/LocalStorage.utils";

interface Props {
  points: Record[];
}

const Graph: React.FC<Props> = ({ points }) => {
  const data = React.useMemo(
    () => [
      {
        label: "Výsledky",
        data: points,
      },
    ],
    [points]
  );

  const primaryAxis = React.useMemo<AxisOptions<Record>>(
    () => ({
      getValue: (datum) => new Date(datum.time),
      scaleType: "time",
    }),
    []
  );

  const secondaryAxes = React.useMemo<AxisOptions<Record>[]>(
    () => [
      {
        getValue: (datum) => datum.value,
        scaleType: "linear",
      },
    ],
    []
  );

  return (
    <div style={{ width: "100%", height: 300 }}>
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
