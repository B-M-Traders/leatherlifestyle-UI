// import Image from "next/image";
// import React from "react";

// const Aboutus = () => {
//   return (
//     <div className="bg-templateBrown">
//       <div
//         style={{
//           backgroundImage: "url('/banners/12260.jpg')",
//           //   backgroundAttachment: "fixed",
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//         }}
//         className="h-[55vh] md:h-[45vh] lg:h-[100vh] relative"
//       >
//         <div className="absolute px-4 inset-0 flex items-center justify-center bg-gradient-to-t from-templateBrown to-black/25">
//           {/* <p className="text-xl font-light text-center text-white">About</p> */}
//           <div>
//             <h1 className="text-5xl md:text-7xl lg:text-8xl text-center font-medium tracking-tight text-white uppercase">
//               Artisan Hide
//             </h1>
//             <p className="text-[16px] md:text-[18px] lg:text-[20px] tracking-wide max-w-xl mx-auto font-light text-center text-white">
//               Real leather. Real craftsmanship. Real trust.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="templateContainer py-10  md:py-9 lg:py-20 space-y-5">
//         <h2 className="text-[26px] leading-[1.25] md:text-[30px] lg:text-[34px] -tracking-[0.01em] font-medium uppercase text-center text-white">
//           Who We Are
//         </h2>
//         <p className="text-[14px] md:text-[16px] font-extralight tracking-wide text-white max-w-[900px] text-center mx-auto">
//           At Artisan Hide, we specialize in premium leather goods that stand the
//           test of time. Founded with a passion for traditional craftsmanship,
//           our mission is simple — to create honest, high-quality leather jackets
//           and accessories that you can wear with pride.
//         </p>
//       </div>
//       <Image
//         src={"/banners/3.webp"}
//         alt=""
//         height={600}
//         width={1200}
//         sizes="100vw"
//         className="h-[300px] md:h-[400px]  w-full object-cover"
//       />
//       <div className="templateContainer py-10  md:py-9 lg:py-20 space-y-5">
//         <h2 className="text-[26px] leading-[1.25] md:text-[30px] lg:text-[34px] -tracking-[0.01em] font-medium uppercase text-center text-white">
//           Crafted To Last
//         </h2>
//         <p className="text-[14px] md:text-[16px] font-extralight tracking-wide text-white max-w-[900px] text-center mx-auto">
//           Every product we offer is handcrafted by skilled artisans using
//           ethically sourced, 100% genuine leather. From cutting and stitching to
//           finishing, each step is done with care, precision, and passion —
//           ensuring you get a piece that is not just beautiful, but built to
//           last.
//         </p>
//       </div>
//       <Image
//         src={"/banners/3.webp"}
//         alt=""
//         height={600}
//         width={1200}
//         sizes="100vw"
//         className="h-[300px] md:h-[400px]  w-full object-cover"
//       />
//       <div className="templateContainer py-10  md:py-9 lg:py-20 space-y-5">
//         <h2 className="text-[26px] leading-[1.25] md:text-[30px] lg:text-[34px] -tracking-[0.01em] font-medium uppercase text-center text-white">
//           Handcrafted by Real Artisans
//         </h2>
//         <p className="text-[14px] md:text-[16px] font-extralight tracking-wide text-white max-w-[900px] text-center mx-auto">
//           Each piece is made by skilled hands, not mass-produced in a factory.
//           Our artisans come from generations of leather craftsmanship, adding
//           soul to every stitch.
//         </p>
//       </div>
//       <Image
//         src={"/banners/3.webp"}
//         alt=""
//         height={600}
//         width={1200}
//         sizes="100vw"
//         className="h-[300px] md:h-[400px]  w-full object-cover"
//       />
//       <div className="templateContainer py-10  md:py-9 lg:py-20 space-y-5">
//         <h2 className="text-[26px] leading-[1.25] md:text-[30px] lg:text-[34px] -tracking-[0.01em] font-medium uppercase text-center text-white">
//           No Shortcuts, No Compromises
//         </h2>
//         <p className="text-[14px] md:text-[16px] font-extralight tracking-wide text-white max-w-[900px] text-center mx-auto">
//           We don’t cut corners to save costs. Every jacket and accessory is cut,
//           stitched, and finished with care — the same way it has been done for
//           decades.
//         </p>
//       </div>
//       <Image
//         src={"/banners/3.webp"}
//         alt=""
//         height={600}
//         width={1200}
//         sizes="100vw"
//         className="h-[300px] md:h-[400px]  w-full object-cover"
//       />
//     </div>
//   );
// };

// export default Aboutus;
import Image from "next/image";
import React from "react";

const Aboutus = () => {
  const values = [
    {
      title: "Be world-class",
      description:
        "Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quis. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.",
    },
    {
      title: "Share everything you know",
      description:
        "Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.",
    },
    {
      title: "Always learning",
      description:
        "Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.",
    },
    {
      title: "Be supportive",
      description:
        "Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit ventatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.",
    },
    {
      title: "Take responsibility",
      description:
        "Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.",
    },
    {
      title: "Enjoy downtime",
      description:
        "Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.",
    },
  ];
  return (
    <>
      <div className="templateContainer py-8  md:py-16 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6 lg:space-y-8 my-auto lg:pr-20">
            <p className="text-templateBrown font-medium tracking-wide">
              About Artisan Hide
            </p>
            <h1 className="text-3xl md:text-2xl lg:text-5xl font-light leading-none text-templateBrown">
              We're changing the way people connect
            </h1>
            <p className="text-[14px] lg:text-[16px] font-extralight tracking-wide">
              Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis
              cupidatat mollit aute velit. Et labore commodo nulla aliqua
              proident mollit ullamco exercitation tempor. Sint aliqua anim
              nulla sunt mollit id pariatur in voluptate cillum. Eu voluptate
              tempor esse minim amet fugiat veniam occaecat aliqua.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 ">
            <div className=" md:my-auto">
              <Image
                src={"/men2.jpg"}
                alt=""
                height={600}
                width={600}
                className="aspect-[4/5] rounded-lg object-cover"
              />
            </div>
            <div className=" space-y-4">
              <Image
                src={"/men2.jpg"}
                alt=""
                height={600}
                width={600}
                className="aspect-[4/4.4] rounded-lg object-cover"
              />
              <Image
                src={"/men2.jpg"}
                alt=""
                height={600}
                width={600}
                className="aspect-[4/4.4] rounded-lg object-cover"
              />
            </div>
            <div className=" space-y-4 ">
              <Image
                src={"/men2.jpg"}
                alt=""
                height={600}
                width={600}
                className="aspect-[4/5] rounded-lg object-cover"
              />
              <Image
                src={"/men2.jpg"}
                alt=""
                height={600}
                width={600}
                className="aspect-[4/5] rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="templateContainer py-8  md:py-16 lg:py-12 grid grid-cols-1 gap-8 md:gap-0 md:grid-cols-[65%_35%] lg:grid-cols-[60%_40%]">
        <div className="space-y-6">
          <h3 className="text-3xl md:text-2xl lg:text-5xl font-light leading-none text-templateBrown">
            Our Mission
          </h3>
          <p className="text-[14px] lg:text-[16px] font-extralight tracking-wide">
            Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis
            cupidatat mollit aute velit. Et labore commodo nulla aliqua proident
            mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt
            mollit id pariatur in voluptate cillum. Eu voluptate tempor esse
            minim amet fugiat veniam occaecat aliqua.
          </p>
          <p className="text-[14px] lg:text-[16px] font-extralight tracking-wide">
            Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis
            cupidatat mollit aute velit. Et labore commodo nulla aliqua proident
            mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt
            mollit id pariatur in voluptate cillum. Eu voluptate tempor esse
            minim amet fugiat veniam occaecat aliqua.
          </p>
        </div>
        <div className="space-y-8 lg:space-y-12 md:pl-10 lg:pl-20 my-auto">
          <div className="space-y-1">
            <div className="text-3xl md:text-3xl lg:text-4xl font-semibold text-templateBrown">
              44 million
            </div>
            <div className="text-[14px] lg:text-[16px] font-extralight tracking-wide">
              Transactions every 24 hours
            </div>
          </div>

          <div className="space-y-1 ">
            <div className="text-3xl md:text-3xl lg:text-4xl font-semibold text-templateBrown">
              44 million
            </div>
            <div className="text-[14px] lg:text-[16px] font-extralight tracking-wide">
              Transactions every 24 hours
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl md:text-3xl lg:text-4xl font-semibold text-templateBrown">
              44 million
            </div>
            <div className="text-[14px] lg:text-[16px] font-extralight tracking-wide">
              Transactions every 24 hours
            </div>
          </div>
        </div>
      </div>
      <div className="templateContainer py-8  md:py-8 lg:py-12">
        <Image
          src={"/banners/12260.jpg"}
          alt=""
          height={800}
          width={1600}
          sizes="100vw"
          className="h-auto md:h-[350px] lg:h-[500px] w-full rounded-2xl object-cover"
        />
      </div>
      <div className="templateContainer py-8  md:py-16 lg:py-12">
        <div className="mb-12 space-y-2">
          <h2 className="text-3xl md:text-2xl lg:text-5xl font-light leading-none text-templateBrown">
            Our values
          </h2>
          <p className="text-[14px] lg:text-[16px] font-extralight tracking-wide max-w-[600px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            magnam voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-medium text-templateBrown">
                {value.title}
              </h3>
              <p className="text-[14px] lg:text-[16px] font-extralight tracking-wide max-w-[600px]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Aboutus;
