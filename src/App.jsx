import "./App.css";

function App() {
  return (
    <div>
      <header>
        <img src="./images/images.jpg" alt="Lapiz alegre" />
        <h1>Excusas para peques</h1>
      </header>
      <section id="setup-container">
        <div className="setup-inner">
          <div className="speech-bubble-ai" id="speech-bubble-ai">
            <p id="excusas-boss-text">
              Ups! Parece que se me olvidó hacer la tarea. Pero es que un
              alienígena aterrizó en nuestro jardín y me distrajo toda la noche.
              ¡Fue realmente increíble
            </p>
          </div>
        </div>
        <div
          className="setup-inner setup-input-container"
          id="setup-input-container"
        >
          <textarea
            id="setup-textarea"
            placeholder="Un genio maligno quiere conquistar el mundo utilizando la IA."
          ></textarea>
          <button className="send-btn" id="send-btn" aria-label="send"></button>
        </div>
      </section>
    </div>
  );
}

export default App;
