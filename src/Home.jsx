import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Home() {
  const [state, setState] = useState([]);
  async function handleall() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setState(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    handleall();
  }, []);
  return (
    <div className="w-full ">
      <div className="max-w-7xl mx-auto flex justify-between ">
        <ul className=" grid lg:grid-cols-3 gap-[200px] p-2">
          {state.map((item) => (
            <li
              key={item.id}
              className=" p-2 flex flex-col justify-center items-center rounded-2xl hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt="image"
                className="w-[300px] h-[300px]"
              />
              <h3>{item.title}</h3>
              <NavLink to={"/product/" + item.id}>
                <button className="border p-2">Read more</button>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
