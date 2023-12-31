import { useState } from "react";
import "./App.css";
import { Configuration, OpenAIApi } from "openai";
import { process } from "./env";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

function App() {
  const [excuse, setExcuse] = useState("");
  const [response, setResponse] = useState("");
  const [bossText, setBossText] = useState(
    "¡Ponme a prueba! Dame una situación incómoda y graciosa, y te daré una excusa tan ingeniosa que hasta tus padres se reirán!"
  );

  async function generateExcuse(event) {
    event.preventDefault();
    try {
      setBossText("Espera en un momento, te responderé...");

      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Contestar a la pregunta: ¿Por qué no has hecho los deberes?",
        max_tokens: 60,
      });

      const excuseText = response.data.choices[0].text.trim();
      console.log("Excusa generada:", excuseText);

      setExcuse("");
      setResponse(excuseText);
      setBossText(
        "¡Ponme a prueba! Dame una situación incómoda y graciosa, y te daré una excusa tan ingeniosa que hasta tus padres se reirán!"
      );
    } catch (error) {
      console.error("Error al generar la excusa:", error);
    }
  }

  function handleTextareaChange(event) {
    setExcuse(event.target.value);
  }

  return (
    <div>
      <header>
        <img src="./images/images.jpg" alt="Lapiz alegre" />
        <h1>Excusas para peques</h1>
      </header>
      <main>
        <section id="setup-container">
          <div className="setup-inner">
            <img src="/images/ett.jpg" alt="Imagen" />
            <div className="speech-bubble-ai" id="speech-bubble-ai">
              <p id="excusas-boss-text">{bossText}</p>
            </div>
          </div>
          <form
            className="setup-inner setup-input-container"
            id="setup-input-container"
            onSubmit={generateExcuse}
          >
            <textarea
              id="setup-textarea"
              placeholder="Un genio maligno quiere conquistar el mundo utilizando la IA."
              value={excuse}
              onChange={handleTextareaChange}
            />
            <button
              className="send-btn"
              id="send-btn"
              aria-label="send"
              type="submit"
            >
              <img src="images/flecha.jpg" alt="flecha" />
            </button>
          </form>
        </section>
        <section className="output-container" id="output-container">
          <h1 id="output-title"></h1>
          <h2 id="output-stars"></h2>
          <p id="output-text">{response}</p>
        </section>
      </main>
      <footer>&copy; 2023 ExcusasPeques todos los derechos reservados</footer>
    </div>
  );
}

export default App;
