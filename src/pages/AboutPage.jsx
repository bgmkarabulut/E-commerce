import pic1 from "../images/about.jpg";
import pic2 from "../images/about2.jpg";
const AboutPage = () => {
  return (
    <section class="py-24 relative">
      <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div class="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div class="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <h2 class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Building Stronger Communities through Collaboration and
                Empowerment
              </h2>
              <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                Through collaborationperse perspectives and strengths are
                leveraged to create inclusive environments where everyone has
                the opportunity to thrive. This approach not only fosters
                personal growth and achievement but also strengthens the fabric
                of society.
              </p>
            </div>
          </div>
          <img
            class="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
            src={pic1}
            alt="about Us image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
