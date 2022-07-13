import Header from "../components/header/Header";
import Navbar from "../components/Navbar/Navbar";
// import Slider from "../components/slider/Slider";
import Sliderone from "../components/slider/Sliderone";
import Stages from "../components/stages/Stages";
import Carousel from "../components/stages/Carousel";
// import Clinic from "../components/Clinic/Clinic";
import Clinicone from "../components/Clinic/Clinicone";
import Persons from "../components/Persons/Persons";
import axios from "axios";
import Before from "../components/Beforeafter/Before";
import Beforejs from "../components/Beforeafter/Beforeslider";
import Blog from "../components/Blog/Blog";
import Form from "../components/Form/Form";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";

export default function Home({ sliders }) {
  console.log(sliders);
  return (
    <div>
      <Header />
      <Navbar />
      <br />

      <Sliderone sliders={sliders} />

      <Carousel />
      <br />

      <Clinicone />
      <Persons />

      <Beforejs />

      <Blog />
      <Form />
      <About />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const sliderRes = await axios.get(
    "http://localhost:1337/api/sliders?populate=imgUrl"
  );

  console.log(sliderRes.data);
  return {
    props: {
      sliders: sliderRes.data.data,
    },
  };
}
