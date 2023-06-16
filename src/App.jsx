import { useState } from "react";
import axios from "axios";
import "./App.css";
import { process } from "./env";

function App() {
  const [excuse, setExcuse] = useState("");

  async function generateExcuse() {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/engines/text-davinci-003/completions",
        {
          prompt: "Contestar a la pregunta: ¿Por qué no has hecho los deberes?",
          max_tokens: 70,
          temperature: 0.9,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          },
        }
      );

      const excuseText = response.data.choices[0].text.trim();
      console.log("Excusa generada:", excuseText);
      setExcuse(excuseText);
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
              <p id="excusas-boss-text">{excuse}</p>
            </div>
          </div>
          <div
            className="setup-inner setup-input-container"
            id="setup-input-container"
          >
            <textarea
              id="setup-textarea"
              placeholder="Un genio maligno quiere conquistar el mundo utilizando la IA."
              value={excuse}
              onChange={handleTextareaChange}
            ></textarea>
            <button
              className="send-btn"
              id="send-btn"
              aria-label="send"
              onClick={generateExcuse}
            >
              <img src="images/flecha.jpg" alt="flecha" />
            </button>
          </div>
        </section>
        <section className="output-container" id="output-container">
          <div id="output-img-container" className="output-img-container"></div>
          <h1 id="output-title"></h1>
          <h2 id="output-stars"></h2>
          <p id="output-text"></p>
        </section>
      </main>
      <footer>&copy; 2023 ExcusasPeques todos los derechos reservados</footer>
    </div>
  );
}

export default App;
