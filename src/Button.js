export function Button({ text}) {
  return (
    <button
      onClick={function () {
        console.log("Hola Mundo");
      }}>
      {text} 
    </button>
  );
}
