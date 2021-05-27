const FirstComponent = () => (
    <div>
      <h1>My very first component</h1>
    </div>
  );

  const NamedComponent = (props) => (
    <div>
      <p>My name is {props.name}</p>
    </div>
  );

const App = () => (
    <div>
      <FirstComponent />
      <NamedComponent name="Stefan"/>
    </div>
  );
  
  ReactDOM.render(<App/>,
    document.getElementById("root")); 