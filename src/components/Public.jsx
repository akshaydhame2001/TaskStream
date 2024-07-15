import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to{" "}
          <span className="nowrap">Akshay NextWave Technologies</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Based in the beautiful city of Pune, Akshay NextWave Technologies
          offers next-generation software solutions to stay ahead of the curve.
        </p>
        <address className="public__addr">
          Akshay NextWave Technologies
          <br />
          Phase 3, Hinjawadi
          <br />
          Pune, MH 411057
          <br />
          <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <br />
        <p>Owner: Akshay Dhame</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
