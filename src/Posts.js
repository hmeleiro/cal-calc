import {VscAccount} from 'react-icons/vsc'


export function Post() {
  return (
    <button
      onClick={() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(reponse => reponse.json().then(data => console.log(data) )).catch(error => console.log(error))
      }}
    >
    <VscAccount/>
      Traer datos
    </button>
  );
}
