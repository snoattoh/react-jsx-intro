const Person = (props) => (
    <div>
      <p>Learn some information about this person.</p>
      <p>{props.name} {props.age}</p>
      <h3>{props.age > 17 ? "please go vote!" : "you must be at least 18"} {props.name.length > 8 ? props.name.substring(0,5) : props.name} </h3>
      <ul>
          {props.hobbies.map(h => <li>{h}</li>) }
      </ul>
    </div>
  );


const App = () => (
    <div>
      <Person 
        name="Resterbodin" 
        age="21" 
        hobbies={["Baseball","Running","Sleeping"]}/>
      <Person 
        name="Lester" 
        age="30" 
        hobbies={["Reading","Singing","Dancing", "Sleeping"]}/>
      <Person 
        name="Bester" 
        age="17" 
        hobbies={["Tripping","Winning","Being Awake"]}/>
    </div>
  );
  
  ReactDOM.render(<App/>,
    document.getElementById("root")); 