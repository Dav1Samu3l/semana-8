import { useState } from 'react'


function CardAdicionar({ AdicionarTarefa }) {

    const [tarefa, setTarefa] = useState("")

    return (
        <div>
            <form  onSubmit={(evento) => evento.preventDefault()}>
                <input
                    type="text"
                    placeholder="Adicionar tarefa"
                    value={tarefa}
                    onChange={(e) => setTarefa(e.target.value)} />
            </form>
            <button  type="button" onClick={(e) => AdicionarTarefa(tarefa)}>Adicionar</button>
        </div>
    )
}
export default CardAdicionar;