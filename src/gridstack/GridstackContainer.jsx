import React, { useEffect } from "react";
import "gridstack/dist/gridstack.min.css";
import { GridStack } from "gridstack";
export default function GridstackLayout(props) {
  console.log("layout -> ", props.layout);
  const init = () => {
    const grid = GridStack.init();
    grid.on("added change", (event, items) => {
      for (const item in items) {
        const { w, y, x, id } = item;
        props.layout.setLayout((oldLayout) => {
          return oldLayout.map((widget) => {
            if (widget.id == id) {
              Object.assign(widget, {
                w,
                y,
                x,
                y,
              });
            }
            console.log(widget);
            return widget;
          });
        });
      }
    });
  };
  useEffect(() => {
    // perform initialization or setup here
    console.log("Component mounted!");

    init();

    // return a cleanup function if necessary
    return () => {
      // perform cleanup here if necessary
      console.log("Component unmounted!");
    };
  }, []); // empty dependency array to ensure it only runs once

  return <div className="grid-stack">{props.children}</div>;
}