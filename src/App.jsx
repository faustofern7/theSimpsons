import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container } from "react-bootstrap";
import Frase from "./component/Frase";

function App() {
  return (
    <>
      <Container className="container">
        <img className="w-75"
          src="https://media-protected.taiga.io/attachments/a/a/b/4/1e59bddbfc9b0d9e56fadf4f4230a3c93b20423105e3afc205e3b0a1e4b8/logosimpson.png?token=Zile3g%3AhgExJPysl4AlVuXSTja2bJaB6rvk5XHbuUBNlXlwn2eZFqKUcJvF44xk5JiFBIRz116mUFwckg4bcMwomJhLZQ#_taiga-refresh=userstory:2494482"
          alt="logo simpsons"
        />
      
        <Frase></Frase>
        <button className="mt-3 btn btn-dark">Obtener frase</button>

      </Container>

    </>
  );
}

export default App;
