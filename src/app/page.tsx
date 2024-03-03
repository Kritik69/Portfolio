import Image from "next/image";
import { GoogleGeminiEffectDemo } from "./new-test-ui";
import { SparklesCore } from "@/components/ui/sparkles";
import { Spotlight } from "@/components/ui/Spotlight";
import { NavbarDemo } from "./navBar";
import { PinContainer } from "@/components/3d-pin";

export default function Home() {
  const cardsData = [
    {
      title: "Web development",
      content: "We work with Next.js and Node to build websites",
      image: "/next.svg",
    },
    {
      title: "App development",
      content: "We work with React Native and Node to build Apps",
      image: "/react-native.svg",
    },
  ];

  return (
    <main style={{ height: "100vh" }}>
      <NavbarDemo />
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl text-base text-white-300 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            JAMBUSARIYAs.
          </h1>
          <p className="mt-4 font-normal text-xl text-base text-white-300 max-w-lg text-center mx-auto w-full">
            Welcome to JAMBUSARIYAs Inc., where we turn caffeine into code and
            dreams into digital realities! We&apos;re the masters of web and app
            enchantment, sprinkling a dash of magic into every line of code.
            Let&apos;s make your online presence spellbinding!
          </p>
        </div>
      </div>
      <div className="flex justify-evenly">
        {cardsData.map((i) => {
          return (
            <>
              <PinContainer
                title={i.title}
                href="https://twitter.com/mannupaaji"
              >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    {i.title}
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">{i.content}</span>
                  </div>
                  <Image
                    src={i.image}
                    className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 object-contain"
                    alt="Description of the image"
                    width={304}
                    height={80}
                  />

                  {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
                </div>
              </PinContainer>
            </>
          );
        })}
      </div>
      {/* <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        J A M B U S A R I Y A s
      </h1>
      <div className="w-[100vw] h-40 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-[5px] w-3/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-px w-3/4" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={200}
          className="w-full h-full"
          particleColor="#FFFFFF"
          />
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(100vw_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div> */}
      {/* <GoogleGeminiEffectDemo /> */}
    </main>
  );
}
