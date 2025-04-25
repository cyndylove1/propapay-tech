import ContentHeader from "@/components/ContentHeader";
import GridCard from "@/components/Properties/PropertyCard/GridCard";
import { propertiesData } from "@/constants/properties.constants";
import useApiQuery from "@/hooks/useApiQuery";
import { NavLink } from "react-router";
const Properties = () => {
  const {data: properties} = useApiQuery("/property/user");

  console.log("Properties", properties)

  return (
    <>
      <ContentHeader
        text="Properties"
        path="/properties/lists"
        route="/properties"
      />
      {/* content */}
      <NavLink to="/properties/view">
        <div className="grid gap-6 p-[20px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {propertiesData.map((data, index) => (
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
