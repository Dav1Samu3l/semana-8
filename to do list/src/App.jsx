import { useState } from 'react'
import './App.css'
import CardAdicionar from './Comonents/CardAdicionar';

function App() {
  const [tarefas, setTarefas] = useState([])

  function adicionarTarefa(novoTexto) {
    const novaTarefa = {
      id: tarefas.length + 1,
      texto: novoTexto,
      finalizado: false
    }
    setTarefas([...tarefas, novaTarefa])
  }

  return (
    <div className="App">
      <CardAdicionar AdicionarTarefa={adicionarTarefa} />
    </div>
  )
}

export default App
