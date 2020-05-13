const Welcome = ({ children }) => {
  return (
    <>
      <h1>Welcome to Anki Insight</h1>
      <p>
        To get started, import a <code>collection.anki2</code> anki collection
        database file.
      </p>
      {children}
      <p>This app runs in your browser only, no files are uploaded.</p>
    </>
  );
};

export default Welcome;
