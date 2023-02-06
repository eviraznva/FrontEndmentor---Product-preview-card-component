export interface TitleProps {
  value: string;
}

export function Title(props: TitleProps): JSX.Element {
  return (
    <span className="my-4 font-fraunces text-[2.4rem] leading-[2.75rem] text-blue-900 ssm:my-5 ssm:text-[2.7rem] ssm:leading-[3rem] md:my-9 md:text-[3.4rem] md:leading-[4rem]">
      {props.value}
    </span>
  );
}
