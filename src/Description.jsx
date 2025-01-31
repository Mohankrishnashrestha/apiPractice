import { useParams } from "react-router-dom";

function Description() {
  const params = useParams();

  async function fetchindication() {
    try {
      const res = await fetch("https://fakestoreapi.com/products/" + params.id);
      const d = await res.json();
      console.log(d);
    } catch (error) {
      console.error(error);
    }
  }
  fetchindication();
  return <div></div>;
}

export default Description;
