

const datas = [{
  "src": "/img/realtor-1.jpeg",
  "w": "64",
  "h": "64",
  "alt": "Picture",
  "h3": " مهدی ایلخانی نسب",
  "p": "  869 فروش خانه "
}, {
  "src": "/img/realtor-2.jpeg",
  "w": "64",
  "h": "64",
  "alt": "Picture",
  "h3": "  کوثر بهشتی  ",
  "p": "  245 فروش خانه "
}, {
  "src": "/img/realtor-3.jpeg",
  "w": "64",
  "h": "64",
  "alt": "Picture",
  "h3": "                 عرشیا احسنی  ",
  "p": "  130 فروش خانه "
}]
function Card() {
  return (
    <>
      <p className=" text-2xl py-8  bg-secondry  w-full text-center text-primary  "> سه مالک برتر</p>
      <div className=" box-border flex-col   bg-secondry  w-full  items-center flex md:flex-row xs:flex-col  justify-between text-center">
        {/* <div className="text-center bg-red flex md:flex-row text-white text-sm items-center  w-full  p-4">
        </div> */}
        {datas.map((data) => (<div className=" lg:w-4/12 justify-center align-center; md:flex-row w-4/12  bg-secondry  flex-row flex    ">
          <div className=" flex-row text-white text-sm">
            <img
              className="shadow-3xl  flex flex-col mx-auto rounded-full  w-12/12  md:w-12/12  "
              width={data.w}
              height={data.h}
              src={data.src}
              alt={data.alt} />
            <div className=' flex-col text-white   items-center  py-4  ' >
              <h3 />{data.h3}<h3 />
              <p className="text-graylight-2">{data.p}</p>
            </div>
          </div>
        </div>
          // </div>

        ))}
      </div>
    </>


  )
}
export default Card;