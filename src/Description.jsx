import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Description() {
  const params = useParams();
  const [change, setChange] = useState("");
  console.log(params.id);
  async function handle() {
    const res = await fetch("https://fakestoreapi.com/products/" + params.id);
    const d = await res.json();
    console.log(d);
    setChange(d);
  }
  useEffect(() => {
    handle();
  }, []);

  return (
    <div className="w-full ">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center p-5 border w-[400px] rounded-3xl hover:shadow-2xl scale-75 ease">
        <img src={change.image} alt="" className="w-[300px] h-[300px]" />
        <h3> Name:{change.title}</h3>
        <h4>Price:{change.price}</h4>
      </div>
    </div>
  );
}

export default Description;
