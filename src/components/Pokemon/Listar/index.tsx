import arrayPkms from "../pkms.json"

const Listar = () => {
    const array = arrayPkms

    return<table className="table table-light">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Tipo1</th>
                <th scope="col">Tipo2</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">{array.pokemon[0].id}</th>
                <td>{array.pokemon[0].Nome}</td>
                <td>{array.pokemon[0].Tipo1}</td>
                <td>{array.pokemon[0].Tipo2}</td>
            </tr>
            <tr>
                <th scope="row">{array.pokemon[1].id}</th>
                <td>{array.pokemon[1].Nome}</td>
                <td>{array.pokemon[1].Tipo1}</td>
                <td>{array.pokemon[1].Tipo2}</td>
            </tr>
            <tr>
                <th scope="row">{array.pokemon[2].id}</th>
                <td>{array.pokemon[2].Nome}</td>
                <td>{array.pokemon[2].Tipo1}</td>
                <td>{array.pokemon[2].Tipo2}</td>
            </tr>
        </tbody>
    </table>
}

export default Listar