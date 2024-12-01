import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Label,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useTrackFeatures from "../hooks/useTrackFeatures";
import { AudioFeatures } from "@/types/data";

interface Data {
  audio_features: AudioFeatures[];
}

const ScatterPlot = () => {
  const { data: dataA }: { data: Data | null } = useTrackFeatures({
    group: "A",
  });
  const { data: dataB }: { data: Data | null } = useTrackFeatures({
    group: "B",
  });
  if (!dataA || !dataB) return null;
  return (
    <ResponsiveContainer width="100%" aspect={1}>
      <ScatterChart
        margin={{
          top: 40,
          right: 40,
          bottom: 40,
          left: 0,
        }}
      >
        <CartesianGrid strokeDasharray="4 4" stroke="var(--border)" />
        <XAxis
          type="number"
          dataKey="energy"
          domain={[0, 1]}
          // domain={["dataMin", "dataMax"]}
          name="Energy"
          stroke="var(--subtle)"
          style={{ fontSize: "0.75rem" }}
        >
          <Label
            value="Energy"
            position="bottom"
            offset={0}
            fill="var(--subtle)"
          />
        </XAxis>
        <YAxis
          type="number"
          dataKey="danceability"
          domain={[0, 1]}
          name="danceability"
          stroke="var(--subtle)"
          style={{ fontSize: "0.75rem" }}
        >
          <Label
            value="Danceability"
            position="middle"
            offset={0}
            angle={-90}
            fill="var(--subtle)"
          />
        </YAxis>
        <Tooltip cursor={false} />
        <Scatter
          data={dataA.audio_features}
          stroke="#1ed760"
          fill="#82ca9d7f"
        />
        {/* <Scatter */}
        {/*   data={dataB.audio_features} */}
        {/*   stroke="#ffffff" */}
        {/*   fill="#ffffff7f" */}
        {/* /> */}
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ScatterPlot;
