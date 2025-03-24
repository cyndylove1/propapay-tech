import ContentHeader from "@/components/ContentHeader";
import GridCard from "@/components/Properties/PropertyCard/GridCard";
import { propertiesData } from "@/constants/properties.constants";
import { NavLink } from "react-router";
const Properties = () => {
  return (
    <>
      <ContentHeader
        text="Properties"
        path="/properties/lists"
        route="/properties"
      />
      {/* content */}
      <NavLink to="/properties/view">
        <div className="grid gap-6 p-[20px] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {propertiesData
            .map((data, index) => (
              <GridCard 
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
export default Properties;
