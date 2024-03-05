import profile from "../assets/profile.png";

const About = () => {
  return (
    <div>
      <section className=" bg-gray-200 px-14 grid grid-cols-1 space-x-10 md:grid-cols-2">
        <div className="text-left py-56">
          <h1 className="text-5xl font-extrabold pb-5">
            Hello I am <span className="text-rose-700">Ryandhi Rouqo</span>
          </h1>
          <p className="mt-4 text-2xl">
            I am passionate in the world of Engineering and interested to be
            Research and Development Software Engineer. As a recent graduate
            with in Fullstack Web Developer at Purwadhika Digital School, i have
            specializing in frontend and backend.
            <br />
            <br />
            As a technology lover with full of enthusiasm, curiosity, and a
            strong desire to learn; I also have expertise for several things in
            the world of Mechanical Engineering, Electrical Engineering and
            Informatics Engineering.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img src={profile} alt="Zonkk!!" />
        </div>
      </section>
    </div>
  );
};

export default About;
