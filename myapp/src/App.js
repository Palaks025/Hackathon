import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ businessCase: input }),
    });

    const data = await response.json();
    setTasks(data.tasks);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Smart Task Splitter</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter your business case here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={6}
          cols={60}
        />
        <br />
        <button type="submit">Analyze & Split</button>
      </form>

      <div style={{ marginTop: '2rem' }}>
        <h3>Suggested Tasks:</h3>
        <ul>
          {tasks.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
