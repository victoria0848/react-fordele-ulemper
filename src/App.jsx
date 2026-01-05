import "./App.css";

function App() {
  return (
    <main className="container">
      <h1>React – fordele og ulemper</h1>

      <section>
        <h2>Fordele</h2>
        <ul>
          <li>Genbrugelige komponenter</li>
          <li>Hurtig rendering med Virtual DOM</li>
          <li>Stort community og mange libraries</li>
          <li>God struktur til større applikationer</li>
        </ul>
      </section>

      <section>
        <h2>Ulemper</h2>
        <ul>
          <li>Stejl læringskurve for begyndere</li>
          <li>Kræver ekstra opsætning (fx Vite, Webpack)</li>
          <li>Hyppige ændringer i økosystemet</li>
        </ul>
      </section>
    </main>
  );
}

export default App;