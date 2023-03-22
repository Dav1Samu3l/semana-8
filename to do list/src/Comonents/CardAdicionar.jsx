import { useState } from 'react'


function CardAdicionar({AdicionarTarefa} ) {
    const [tarefa, setTarefa] = useState("")



    return (
        <div>
            <form>
                <input type="text"
                    placeholder="Adicionar tarefa"
                    value={tarefa}
                    onChange={(e) => setTarefa(e.target.value)} />
            </form>
            <button onClick={() => AdicionarTarefa(tarefa)}>Adicionar</button>
        </div>
    )
}
export default CardAdicionar;