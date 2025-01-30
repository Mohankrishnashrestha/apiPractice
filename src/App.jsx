function App() {
  async function handleAllProgram() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  handleAllProgram();
  return <div>App</div>;
}

export default App;
