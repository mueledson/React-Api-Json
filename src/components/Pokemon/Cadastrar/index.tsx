import {useState} from "react"

const Cadastrar = () => {
    
    const [name, setName] = useState("")
    const [tipo, setTipo] = useState("")
    const [tipo2, setTipo2] = useState("")

  return (
        <form>
            <input
                type="text"
                className="name"
                placeholder='Digite o Nome do Pokémon'
                value={name}
                onChange={e => setName(e.target.value)}
                required
            />

            <input
                type="text"
                placeholder='Digite o Tipo do Pokémon'
                value={tipo}
                onChange={e => setTipo(e.target.value)}
                required
            />

            <input
                type="text"
                placeholder='Digite o 2° Tipo do Pokémon'
                value={tipo2}
                onChange={e => setTipo2(e.target.value)}
                required
            />

            <button>Adicionar Pokémon</button>
        </form>
  )
}

export default Cadastrar