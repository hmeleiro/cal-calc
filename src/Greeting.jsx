export function Greeting({title, name = 'User'}) {
  console.log(name);
  return <h1> {title}, dice {name} </h1>;
}

export function UserCard({name, amount, married, address, greet}) {
  console.log(name, amount, married, address, greet)
  return <div>
    <h1>{name}</h1>
    <p>{amount}💰</p>
    <p>{married ? 'married' : 'single'}</p>
    <ul>
      <li>City: {address.city } </li>
      <li> Street: {address.street }</li>
    </ul>
  </div>;
}
