import React from "react";

function Tabletodo({ deleteTask, data, setnewEditableTask }) {
  return (
    <>
      <tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>
          <button onClick={() => deleteTask(data.id)}>Delete</button>
          <button onClick={() => setnewEditableTask(data)}>Edit</button>
        </td>
      </tr>
    </>
  );
}

export default Tabletodo;
