
function Table({ data, config, keyFn }) {

  const renderedHeader = config.map((column) => {
    return <th key={column.label}>{column.label}</th>
  });

  const renderedRows = data.map((rowData) => {

    const renderedCells = config.map((column) => {
      return(
        <td className="p-2" key={column.label}>
          {column.render(rowData)}
        </td>
        );
    });

    return (<tr key={keyFn(rowData)} className="border-b">
      {renderedCells}
    </tr>
    )
  });

  return (
    <div>
      <table className="table-auto border-spacing-2">
        <thead>
          <tr className="border-b-2">
            {renderedHeader}
          </tr>
        </thead>
        <tbody>
          {renderedRows}
        </tbody>
      </table>
    </div>
  )
}

export default Table;