import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex mt-10 px-5 " style={{ height: '75vh' }}>
      <div className="w-full flex flex-row flex-wrap justify-evenly items-center">
        <div>
          <div className="brandName">
            <h1
              className="sm:text-7xl text-6xl"
              style={{ fontFamily: 'nunito' }}
            >
              MM TIMES
            </h1>
          </div>
          <div className="">
            <p
              style={{ fontFamily: 'nunito' }}
              className="lg:text-3xl lg:max-w-lg md:text-2xl md:max-w-64  my-10 font-medium text-slate-500"
            >
              Get innovative home appliances at affordable prices
            </p>
          </div>
          <a href={'#contact'}>
            <span className="contactBtn"> Get In Touch! </span>
          </a>
        </div>
        <img src="static/images/appliances.webp" alt="appliances" />
      </div>
    </div>
  )
}

export default Home
