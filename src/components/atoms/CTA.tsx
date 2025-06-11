import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="cta-section bg-gray-800 p-4 rounded-lg">
      <div className="cta-badge text-lg items-center justify-center flex py-2 px-3 rounded-lg text-white bg-amber-500 w-fit mx-auto">
        Start learning your way.
      </div>
      <h2 className="text-3xl font-bold text-white mt-4 mb-2">
        Build and Personalize Learning Companion
      </h2>
      <p className="text-base text-white">
        Pick a name, subject, voice, & personality — and start learning through
        voice conversations that feel natural and fun.
      </p>
      <Image src="images/cta.svg" alt="cta" width={362} height={232} />
      <button className="btn-primary">
        <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
        <Link href="/companions/new">
          <p>Build a New Companion</p>
        </Link>
      </button>
    </section>
  );
};

export default Cta;
