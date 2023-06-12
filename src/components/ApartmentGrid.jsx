import "./ApartmentGrid.scss";
import ApartmentCard from "./ApartmentCard.jsx";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const response = await fetch("db.json");
  const apartments = await response.json();
  return  {apartments} ;
} 

function ApartmentGrid() {
  const {apartments} = useLoaderData();


  if (apartments.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid">
      {apartments.map((apartment) => (
        <ApartmentCard
          title={apartment.title}
          imageUrl={apartment.cover}
          id={apartment.id}
          key={apartment.id}
        />
      ))}
    </div>
  );
}

export default ApartmentGrid;

