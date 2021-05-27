const Tweet = (props) => (
    <div>
      <h1>{props.username} Tweet By: {props.name}</h1>
      <p>{props.date}</p>
      <p>{props.message}</p>
    </div>
  );

const App = () => (
    <div>
      <Tweet username="Sno" name="Stefan" date="5/31/2021" message="This is the message xD"/>
    </div>
  );
  
  ReactDOM.render(<App/>,
    document.getElementById("root")); 