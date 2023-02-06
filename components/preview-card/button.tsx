import Image from "next/image";

export function Button(): JSX.Element {
  return (
    <div className="mt-6 flex cursor-pointer justify-center rounded-xl border-[1px] border-solid border-blue-900 bg-cyan-500 p-6 text-center font-montserrat text-[1.4rem] font-bold text-white hover:bg-cyan-600 md:mt-8">
      <Image
        src="/images/icon-cart.svg"
        alt="icon cart"
        width={15}
        height={16}
        className="mr-7"
      />
      Add to Cart
    </div>
  );
}
