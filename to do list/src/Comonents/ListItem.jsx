import { useState } from "react";
import "./ListItem.css";
import { MdThumbUp, MdThumbDown } from "react-icons/md";

function ListItem({ tarefa }) {
  const [finalizado, setFinalizado] = useState(tarefa.finalizado);

  function finalizarTarefa() {
    setFinalizado(true);
  }

  return (
    <div className="list-item">
      <p className={finalizado ? "finalizado sem-borda" : ""}>{tarefa.texto}</p>
      {finalizado ? (
        <MdThumbUp />
      ) : (
        <button className="button-reset" onClick={finalizarTarefa}>
          <MdThumbDown />
        </button>
      )}
    </div>
  );
}

export default ListItem;
