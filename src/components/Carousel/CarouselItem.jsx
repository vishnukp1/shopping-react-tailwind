import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Img2 from "../../assets/babyproduct/bf2.jpeg";
export default function CarouselItem() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow : 4
  };



  return (
    <div className='mx-4 m-auto'>
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
              <div className='h-56 bg-indigo-50 flex justify-center items-center rounded-xl mx-6'>
                <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center">{d.review}</p>
                <button className='bg-indigo-50 text-dark text-lg px-6 py-1 rounded-xl'>Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: `John Morgan`,
    img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/13188933a.webp",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Ellie Anderson`,
    img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11718435a.webp",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Nia Adebayo`,
    img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/15414806a.webp",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Rigo Louie`,
    img:  "https://cdn.fcglcdn.com/brainbees/images/products/438x531/13214670a.webp",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams`,
    img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/15740075a.webp",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
];
