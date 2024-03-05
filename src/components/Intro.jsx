const Intro = () => {
  return (
    <>
      <div>
        <section className="relative bg-black bg-cover bg-center bg-no-repeat flex">
          <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="max-w-5xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 className="text-rose-700 text-4xl font-extrabold sm:text-6xl">
                Frontend & Backend Developer
              </h1>

              <p className="mt-4 max-w-2xl mx-auto text-3xl text-white pb-20 sm:text-xl/relaxed ">
                A Result-Oriented Web Developer building and managing Websites
                and Web Applications that leads to the success of the overall
                product
              </p>

              <div className="mt-8 flex flex-wrap text-left">
                <a className="text-sm font-medium text-white">
                  Let Me Show You...
                </a>
              </div>
            </div>
          </div>
          <div>
            <h1></h1>
          </div>
        </section>
      </div>
    </>
  );
};

export default Intro;
