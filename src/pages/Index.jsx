import Buttom from "../components/Buttom";
import Buttom2 from "../components/Buttom2";
import NavBar from "../components/NavBar";
const Index = () => {
  return (
    <>
     <NavBar/>
      <section className="home mb-40">
        <div className="container-home text-center ">
          <h2 className="text-3xl md:text-5xl mb-3">Welcome to the</h2>
          <h1 className="text-6xl md:text-8xl mb-5 text-center">
            2nd Street Station
          </h1>
          <p className="text-2xl md:text-3xl mb-4">Steak House & Lounge</p>
          <p className="text-xl md:text-2xl font-extralight mb-4">
            <em> 15 2nd Street SW Watertown, SD 57201</em>
          </p>
          <p className="text-xl md:text-2xl font-extralight mb-4">
            <em>Opening hours: Thu-Sat 4pm to close</em>
          </p>

          <Buttom name="Reserve now" />
        </div>
      </section>

      <section className="container-info container mx-auto mb-40">
        <div className="container-info__text">
          <h2 className="mb-4">The 2nd Street Station</h2>

          <h5 className="italic mb-10 ">
            The perfect place to enjoy the life and food.
          </h5>

          <p>
            Welcome to 2nd Street Station in Watertown, SD where you’ll find
            yourself surrounded by friends and neighbors looking to cut loose.
            Located in the uptown Watertown, you can come in to untie, unwind
            and uncork with our unbelievable food, signature cocktails and
            swinging atmosphere at 2nd Street Station.
          </p>
        </div>
        <div className="container-info__image">
          <div className="image1">
            <img src="./assets/asparagus.jpg" alt="" />
          </div>
          <div className="image2">
            <img src="./assets/restaurant.jpg" alt="" />
          </div>
          <div className="image3">
            <img src="./assets/carne1.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className="mt-20 flex flex-col md:flex-row content-center mb-40">
        <div className="w-full md:w-1/2">
          <img src="./assets/petr-sevcovic.jpg" alt="" />
        </div>

        <div className="w-full md:w-1/2 justify-center flex flex-col content-center since-text">
          <h2 className=" text-center">Since 2016</h2>
          <h5 className="italic text-center">
            The 2nd Street Station is proud to be serving fine dishes for more
            than 6 years!
          </h5>
        </div>
      </section>

      <section className="mb-40 ">
        <h2 className="text-center mb-20">Menu</h2>
        <div className="grid container mx-auto">
          <div className="card-menu mx-4 mb-16">
            <div className="card-image">
              <img src="./assets/beef.jpg" alt="" />
            </div>
            <div className="container-title-menu flex justify-between mt-2">
              <p className="title-menu  m-0">grilled beef</p>
              <p className="m-0">$4,90</p>
            </div>
            <div className="container-title-description flex justify-between mt-1">
              <p className="m-0">meat with potatoes and salad</p>
              <p className="m-0">
                {" "}
                <span>300gr</span>
              </p>
            </div>
          </div>

          <div className="card-menu mx-4 mb-16">
            <div className="card-image">
              <img src="./assets/fish.jpg" alt="" />
            </div>
            <div className="container-title-menu flex justify-between mt-2">
              <p className="title-menu  m-0">grilled beef</p>
              <p className="m-0">$4,90</p>
            </div>
            <div className="container-title-description flex justify-between mt-1">
              <p className="m-0">meat with potatoes and salad</p>
              <p className="m-0">
                {" "}
                <span>300gr</span>
              </p>
            </div>
          </div>

          <div className="card-menu mx-4 mb-16">
            <div className="card-image">
              <img src="./assets/burger.jpg" alt="" />
            </div>
            <div className="container-title-menu flex justify-between mt-2">
              <p className="title-menu  m-0">grilled beef</p>
              <p className="m-0">$4,90</p>
            </div>
            <div className="container-title-description flex justify-between mt-1">
              <p className="m-0">meat with potatoes and salad</p>
              <p className="m-0">
                {" "}
                <span>300gr</span>
              </p>
            </div>
          </div>

          <div className="card-menu mx-4 mb-16">
            <div className="card-image">
              <img src="./assets/fries.jpg" alt="" />
            </div>
            <div className="container-title-menu flex justify-between mt-2">
              <p className="title-menu  m-0">grilled beef</p>
              <p className="m-0">$4,90</p>
            </div>
            <div className="container-title-description flex justify-between mt-1">
              <p className="m-0">meat with potatoes and salad</p>
              <p className="m-0">
                {" "}
                <span>300gr</span>
              </p>
            </div>
          </div>

          <div className="card-menu mx-4 mb-16">
            <div className="card-image">
              <img src="./assets/pasta.jpg" alt="" />
            </div>
            <div className="container-title-menu flex justify-between mt-2">
              <p className="title-menu  m-0">grilled beef</p>
              <p className="m-0">$4,90</p>
            </div>
            <div className="container-title-description flex justify-between mt-1">
              <p className="m-0">meat with potatoes and salad</p>
              <p className="m-0">
                {" "}
                <span>300gr</span>
              </p>
            </div>
          </div>

          <div className="card-menu mx-4 mb-16">
            <div className="card-image">
              <img src="./assets/food1.jpg" alt="" />
            </div>
            <div className="container-title-menu flex justify-between mt-2">
              <p className="title-menu  m-0">grilled beef</p>
              <p className="m-0">$4,90</p>
            </div>
            <div className="container-title-description flex justify-between mt-1">
              <p className="m-0">meat with potatoes and salad</p>
              <p className="m-0">
                {" "}
                <span>300gr</span>
              </p>
            </div>
          </div>
        </div>

        <Buttom2 name="See Menu" />
      </section>

      <section className="container mx-auto text-center w-full 2xl:w-1/3 mb-40  ">
        <h2>Our Visitors Just Love Our Food!</h2>
      </section>

      <section className="our-team mb-40">
        <div className="container mx-auto py-40">
          <h2 className="text-center">Our Team</h2>
          <h5 className="text-center">Dedicated restaurant service</h5>
          <p className="text-center">
            Everything we do here at the restaurant we do as a team! Each chef,
            each cook at the kitchen work as one, just to make you culinary
            experience unforgettable! With so much depending on each individual
            team member we have, we’re proud to showcase you with our whole
            cooking team!
          </p>
        <Buttom name="Our team" />

        </div>

      </section>
    </>
  );
};

export default Index;
