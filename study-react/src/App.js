import "./App.css";

function Header(props) {
  return (
    <header>
      <h1>
        <a href="/">{props.title}</a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const list = props.topics.map((item) => (
    <li key={item.id}>
      <a href={"/read/" + item.id}>{item.title}</a>
    </li>
  ));

  return (
    <nav>
      <ol>{list}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  const topics = [
    { id: 1, title: "html", body: "html is..." },
    { id: 2, title: "css", body: "css is..." },
    { id: 3, title: "javascript", body: "javascript is..." },
  ];

  return (
    <div className="App">
      <Header title="REACT" />
      <Nav topics={topics} />
      <Article title="Welcome" body="Hello, WEB" />
    </div>
  );
}

export default App;
