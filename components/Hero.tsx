import Image from "next/image";
import Hero1 from "@/public/images/Hero1.jpg";
export default function Hero() {
  return (
    <div className="hero bg-base-neutral min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src={Hero1}
          className="max-w-7xl rounded-lg shadow-2xl"
          width={500}
          alt=""
        />
        <div className="max-w-4xl max-lg:text-center lg:mb-32">
          <h1 className="text-8xl font-bold">Box Office News!</h1>
          <p className="py-6 text-2xl">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary btn-xl">Get Started</button>
        </div>
      </div>
    </div>
  );
}
