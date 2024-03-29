# Advantages

Since the json representing the layout and the actual layout are in sync we don't have to perform
any type of processing on the json before storing it.

I am storing the json to a HTTP API in this case.

```jsx
const [layout, setLayout] = useState([
  {
    id: 3,
    x: 6,
    y: 0,
    w: 6,
    h: 3,
    data: {
      title: "I am a Grid item",
      ability: "I can be moved around and resized.",
    },
  },
]);

const saveLayout = () => {
  axios.post("/save-layout", layout).then(() => {});
};

saveLayout();
```

The saved json could then be retrieved from the store (an HTTP API in this case)... To construct the layout back again easily, since the primary function of the library is
to convert a json model to a Gridstack layout.

```jsx
const Layout = () => {
  const [showLayout, setShowLayout] = useState(false);
  const [layout, setLayout] = useState([]);

  useEffect(() => {
    axios.get("/get-layout").then(({ data }) => {
      setLayout(data);
      setShowLayout(true);
    });
  }, []);

  return (
    showLayout && (
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
    )
  );
};
```
