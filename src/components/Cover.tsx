import Image from "@/assets/images/Cover.png"
const Cover = () => {
    return (
      <>
        <div className="md:flex hidden w-full h-screen">
          <img
            src={Image}
            alt="Login Cover"
            className="h-full w-full rounded-xl object-cover xl:h-[976px] xl:w-[696px]"
          />
        </div>
      </>
    );
}
export default Cover;