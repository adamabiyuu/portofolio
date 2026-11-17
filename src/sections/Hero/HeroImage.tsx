import profile from "@/assets/images/profile.png";
import Lanyard from "@/components/Lanyard";
import strapGeometric from "@/assets/images/strap-geometric.png";

const HeroImage = () => {
  return (
    <div
      className="
        mb-10
        flex
        justify-center
        lg:mb-0
        lg:justify-end
      "
    >
      <div
        className="
          relative
          h-[430px]
          w-full
          max-w-[420px]
          sm:h-[500px]
          sm:max-w-[460px]
          lg:h-[540px]
          lg:max-w-[500px]
        "
      >
        {/* Background Glow */}
        <div
          className="
            absolute
            inset-10
            rounded-full
            bg-sky-500/20
            blur-[100px]
          "
        />

        {/* 3D Lanyard */}
        <Lanyard
          frontImage={profile}
          backImage={profile}
          strapImage={strapGeometric}
          strapColor="#071B3D"
          orientation="portrait"
          imageFit="cover"
          size={0.58}
          anchor="center"
          strapLength={0.5}
          strapWidth={0.8}
          metal="silver"
          interactive
          intro
          className="relative z-10"
        />
      </div>
    </div>
  );
};

export default HeroImage;

// import profile from "@/assets/images/profile.png";

// import { floatingIcons } from "@/data/floatingIcons";

// const HeroImage = () => {
//   return (
//     <div
//       className="
//         mb-10
//         flex
//         justify-center

//         lg:mb-0
//         lg:justify-end
//       "
//     >
//       <div className="relative">
//         {/* Glow */}
//         <div
//           className="
//             absolute
//             inset-0
//             scale-110
//             rounded-full
//             bg-sky-500/20
//             blur-3xl
//           "
//         />

//         {/* Photo */}
//         <div
//           className="
//             relative

//             h-52
//             w-52

//             overflow-hidden
//             rounded-full

//             border-4
//             border-sky-500

//             bg-slate-800

//             shadow-[0_0_70px_rgba(14,165,233,0.25)]

//             sm:h-64
//             sm:w-64

//             md:h-72
//             md:w-72

//             lg:h-80
//             lg:w-80

//             xl:h-96
//             xl:w-96
//           "
//         >
//           <img
//             src={profile}
//             alt="Adam Abiyu Febrisyam"
//             className="
//               h-full
//               w-full
//               object-cover
//               scale-110
//             "
//           />
//         </div>

//         {/* Floating Icons */}
//         {floatingIcons.map((item) => {
//           const Icon = item.icon;

//           return (
//             <div
//               key={item.color}
//               className={`
//                 absolute

//                 flex
//                 items-center
//                 justify-center

//                 h-10
//                 w-10

//                 rounded-xl

//                 border
//                 border-slate-700

//                 bg-slate-900/90

//                 shadow-xl

//                 backdrop-blur-xl

//                 sm:h-11
//                 sm:w-11

//                 lg:h-12
//                 lg:w-12

//                 xl:h-14
//                 xl:w-14

//                 ${item.className}
//               `}
//             >
//               <Icon size={20} className={item.color} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default HeroImage;
