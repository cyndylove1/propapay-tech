import ContentHeader from "@/components/ContentHeader";
import ListCard from "@/components/Properties/PropertyCard/ListCard";
import { propertiesData } from "@/constants/properties.constants";
import { NavLink } from "react-router";
const PropertiesLists = () => {
  return (
    <>
      <ContentHeader
        text="Properties"
        path="/properties/lists"
        route="/properties"
      />
      <NavLink to="/properties/view">
        <div className="flex flex-col gap-6 p-5">
          {propertiesData.map((data, index) => (
            <ListCard
              key={index}
              propertyName={data.propertyName}
              propertyLocation={data.propertyLocation}
              beds={data.beds}
              bathrooms={data.bathrooms}
              area={data.area}
              price={data.price}
              image={data.image}
              badge={data.badge}
            />
          ))}
        </div>
      </NavLink>
    </>
  );
};
export default PropertiesLists;
