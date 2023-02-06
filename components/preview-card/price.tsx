export interface PriceProps {
  orginalPrice: number;
  discountPrice: number;
}

export function Price(props: PriceProps): JSX.Element {
  return (
    <span className="flex items-center font-fraunces text-[2.4rem] font-bold text-cyan-500 ssm:text-[2.7rem] md:text-[3.4rem]">
      ${props.discountPrice}
      <p className="ml-[2.50rem] font-montserrat font-medium text-blue-300 line-through">
        ${props.orginalPrice}
      </p>
    </span>
  );
}
