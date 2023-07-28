import React, { useState } from "react";
import { GridstackContainer, GridstackItem } from "../../gridstack";
import { JsonView, darkStyles } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";

import "./styles.css";

const Widget = (props) => {
  const { data } = props;
  return (
    <div className="widget">
      <div>
        <h1>{data.title}</h1>
        <div>{data.data}</div>
      </div>
    </div>
  );
};

function Simple() {
  const [layout, setLayout] = useState([
    {
      id: "1",
      x: 0,
      y: 0,
      w: 12,
      h: 2,
      data: {
        type: "calendar",
        title: "A calendar widget",
        data: "10/10/1990",
      },
    },
  ]);
  return (
    <div>
      <div className="title">
        <div>
          <h3>Simple</h3>
          <p>Move and resize the grid item</p>
        </div>
      </div>
      <div className="row">
        <div className="flex-1">
          <GridstackContainer items={layout} setLayout={setLayout}>
            {layout.map((widget) => {
              return (
                <GridstackItem
                  key={widget.id}
                  id={widget.id}
                  x={widget.x}
                  y={widget.y}
                  w={widget.w}
                  h={widget.h}
                >
                  <Widget data={widget.data} />
                </GridstackItem>
              );
            })}
          </GridstackContainer>
        </div>
        <div className="flex-1">
          <JsonView data={layout} style={darkStyles} class="json-viewer" />
        </div>
      </div>
    </div>
  );
}

export default Simple;
