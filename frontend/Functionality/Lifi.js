import { LiFiWidget } from "@lifi/widget";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const LiFiWidgetDynamic = dynamic(
  () => import("@lifi/widget").then((module) => module.LiFiWidget),
  {
    ssr: false,
  }
);

import React from "react";

const Lifi = () => {
  return (
    <div>
      {" "}
      <LiFiWidgetDynamic
        config={{
          containerStyle: {
            width: 392,
            height: 640,
            border: `1px solid rgb(234, 234, 234)`,
            borderRadius: "16px",
            display: "flex",
            maxWidth: 392,
          },
        }}
      />
    </div>
  );
};

export default Lifi;
