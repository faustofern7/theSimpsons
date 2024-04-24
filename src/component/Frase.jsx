import { Card, CardBody } from "react-bootstrap";

const Frase = () => {
  return (
    <>
      <Card className="border-0 fondoCard rounded mt-5">
        <h1 className="display-6">Nelson Muntz</h1>
        <hr />

        <CardBody>
          <img
            src="https://cdn.glitch.me/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png"
            alt="imagen personaje"
          />
          <p className="mt-4 p-3 rounded fs-5">
            "¡Ay, caramba! La vida es como un cajón de sorpresas, amigo. A veces
            te encuentras con un montón de problemas más grandes que el
            mismísimo Bart Simpson, pero siempre hay que recordar que cada
            desafío es una oportunidad para demostrar nuestra valentía y
            astucia. Así que, aunque parezca que todo está patas arriba, siempre
            hay una forma de salir adelante y convertirnos en verdaderos héroes
            de Springfield. ¡No te rindas, compadre!"
          </p>
        </CardBody>
      </Card>
    </>
  );
};

export default Frase;
