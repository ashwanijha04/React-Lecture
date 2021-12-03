import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [resourceType, setResourceType] = useState("");
  const [data, setData] = useState([]);

  console.log("Without effect!");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((res) => {
        setData(res);
      });
  }, [resourceType]);

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
          setResourceType("todos");
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


      {
        data.map(item=>{
          return <pre> {JSON.stringify(item)} </pre>
        })
      }



    </div>
  );
}
