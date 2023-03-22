import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className="container">
        <i className="fa-solid fa-book-open"></i>
        <main>
          <Dictionary default="wind" />
        </main>
      <footer className="text-center footer">Coded by WP, access on <a href="https://github.com/becauseidontlike/new-dictionary">Github</a></footer>
      </div>
      
    </div>
  );
}

export default App;
