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
            <p id="movie-boss-text">
              Dame un concepto en una oración y te proporcionaré un título
              llamativo, un resumen que los estudios amarán, un póster de
              película... ¡Y elegiré el reparto!
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
