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
              Give me a one-sentence concept and I'll give you an eye-catching
              title, a synopsis the studios will love, a movie poster... AND
              choose the cast!
            </p>
          </div>
        </div>
        <div
          className="setup-inner setup-input-container"
          id="setup-input-container"
        >
          <textarea
            id="setup-textarea"
            placeholder="An evil genius wants to take over the world using AI."
          ></textarea>
          <button className="send-btn" id="send-btn" aria-label="send"></button>
        </div>
      </section>
    </div>
  );
}

export default App;
