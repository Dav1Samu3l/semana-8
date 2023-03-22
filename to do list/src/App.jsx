import { useState } from 'react'
import './App.css'
import CardAdicionar from './Comonents/CardAdicionar';
import ListItem from './Comonents/ListItem';

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
    
      {tarefas.map((tarefa) => (
  <ListItem key={tarefa.id} tarefa={tarefa} />
))}
    
    </div>
  )
}
export default App
