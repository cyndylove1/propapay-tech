export interface PropertyCardProps {
    propertyName: string;
    propertyLocation: string;
    beds: number | string;
    bathrooms: number | string;
    area: number | string;
    price: number | string;
    image: string;
    badge: string;
}

export interface PropertyFacilitiesProps {
    bedroom: number | string;
    bathroom: number | string;
    homeSystem: number | string;
    gym: number | string;
    parking: number | string;
    area: number | string;
    pool: number | string;
    garden: number | string;
}