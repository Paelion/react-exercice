const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Nom</th>
                <th>Job</th>
                <th>Email</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const Ligne = props.infoData.map((data,index) => {
         return (
            <tr key={index}>
                <td>{data.name}</td>
                <td>{data.job}</td>
                <td>{data.email}</td>
            </tr>
         );
    });
    return <tbody>{Ligne}</tbody>

}

const Table = (props) => {
    const {infoData} = props;
    return(
        <table border="1">
            <TableHeader/>
            <TableBody infoData={infoData}/>
        </table>
    )
}

export default Table