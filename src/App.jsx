import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./App.css";
import { process } from "./env";

const openaiConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openaiApi = new OpenAIApi(openaiConfig);

function App() {
  const [excuse, setExcuse] = useState("");

  async function generateExcuse() {
  	const response = await openai.createCompletion({
      'model': 'text-davinci-003',
      'prompt': 'Sound enthusiastic in five words or less.'
    })
    console.log(response.data.choices[0].text.trim())
      };

      console.log(response);

      const excuseText = response.choices[0].message.content.trim();
      setExcuse(excuseText);
    }
  } catch (error) { 
    console.error(error);
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
            />
            <button
              className="send-btn"
              id="send-btn"
              aria-label="send"
              onClick={generateExcuse}
            >
              <img src="images/flecha.jpg" alt="flecha"></img>
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
