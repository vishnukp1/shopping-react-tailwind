import Button from "../Shared/Button";

const ProductCard = ({ data }) => {
  return (
    <div className="mb-10 mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* card section */}
        {data.map((data) => (
          <div
          
            key={data.id}
          >
            <div className="relative">
              <img
                src={data.img}
                alt=""
                className="h-[180px] w-[260px] object-cover rounded-md"
              />
              {/* hover button */}
              <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                <Button
                  text={"Add to cart"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <div className="leading-7 flex justify-between">
              <div>
                <h2 className="font-semibold">{data.title}</h2>
                <h2 className="font-bold">${data.price}</h2>
              </div>

              <button className="bg-grey h-10 px-3 mt-3 ">Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
