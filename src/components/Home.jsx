const Home = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-row flex-wrap justify-evenly items-center">
        <div>
          <div className="brandName">
            <h1 data-text="MM">
              <span>MM</span>
            </h1>
            <h1>
              <span>Times</span>
            </h1>
          </div>
          <div className="">
            <p className=" text-3xl max-w-xl my-10 font-medium text-slate-500">
              Get innovative home appliances at affordable prices
            </p>
          </div>
          <button>
            <span className="contactBtn"> Get In Touch! </span>
          </button>
        </div>
        <img src="static/images/appliances.webp" alt="appliances" />
      </div>
    </div>
  )
}

export default Home
