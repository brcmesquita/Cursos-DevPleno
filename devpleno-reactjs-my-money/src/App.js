import React from "react";
import Rest from "./rest"
import Header from "./elements/Header"
import Meses from "./Meses"
import AdicionarMes from "./AdicionarMes";

const baseURL = "https://my-money-brcmesquita-default-rtdb.firebaseio.com/";

const { useGet, usePost, useDelete } = Rest(baseURL)

const url =
  "https://my-money-brcmesquita-default-rtdb.firebaseio.com/movimentacoes/2021-04-07.json";

function App() {
  const data = useGet("meses");
  //const [postData, post] = usePost("movimentacoes/2021-04")
  //const [deleteData, remove] = useDelete()

  const saveNew = () => {
    //post({ valor: 20, descricao: "Cu" });
  };

  const doRemove = () => {
    //remove("movimentacoes/2021-04-07/-MXnlTpW2t1HWeVXHVXx.json")
  }

  return (
    <div>
      <Header />
      <div className="container">
        <Meses />
        <AdicionarMes />
        <pre>{JSON.stringify(data)}</pre>
      </div>
    </div>
  );
}

export default App
