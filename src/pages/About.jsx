function About() {
  return (
    <>
      <h1 className="text-6xl mb-4">Chess Dashboard</h1>
      <p className="mb-4 text-2xl font-light">
        A React app created to search Chess.com user profiles and display user
        data.
        <a href="https://www.udemy.com/course/modern-react-front-to-back/">
          {" "}
          Chess Dashboard
        </a>{" "}
        Application created by
        <strong>
          <a href="https://ryanspencer.dev"> Ryan Spencer</a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout By:
        <a className="text-white" href="https://twitter.com/hassibmoddasser">
          Ryan Spencer
        </a>
      </p>
    </>
  );
}

export default About;
