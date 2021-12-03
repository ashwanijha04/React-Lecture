import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [resourceType, setResourceType] = useState("");
  const [data, setData] = useState([]);
  const [hide, setHide] = useState(true)

  console.log("Without effect!");

  const API_URL =
    "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=60.99&lon=30.9&dt=1638552204&appid=c8c93bf6c13dba5dbe6d473c67a67c28";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((res) => {
        setData(res);
      });
  }, [hide, resourceType]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button
        onClick={() => {
          setResourceType("posts");
        }}
      >
        Posts
      </button>
      <button
        onClick={() => {
          setResourceType("comments");
        }}
      >
        Comments
      </button>
      <button
        onClick={() => {
          setHide(false);
        }}
      >
        Todos
      </button>
      <button
        onClick={() => {
          setResourceType("users");
        }}
      >
        Users
      </button>

      {hide ? "": JSON.stringify(data)}

      {/* {data.map((item) => {
        return <pre> {JSON.stringify(item)} </pre>;
      })} */}
    </div>
  );
}
