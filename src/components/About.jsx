import '../App.css'

const About = () => {
  return (
    <div className="aboutSection" id="about">
      <h1
        className="text-center pt-24 sm:text-6xl text-5xl"
        style={{ fontFamily: 'nunito' }}
      >
        What We Do
      </h1>
      <div>
        <div className="flex flex-row flex-wrap m-auto mt-10 justify-evenly items-center">
          <img src="/static/images/appliances.webp" alt="" />
          <div className="flex align-center lg:w-1/2 lg:p-4 p-10 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum
          </div>
        </div>
        <div className="flex flex-row-reverse flex-wrap m-auto justify-evenly items-center">
          <img className="" src="/static/images/appliances.webp" alt="" />
          <div className="flex align-center lg:w-1/2 lg:p-4 p-10 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
