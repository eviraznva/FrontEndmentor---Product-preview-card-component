export interface LabelProps {
  value: string;
}

export function Label(props: LabelProps): JSX.Element {
  return (
    <p className="font-montserrat text-[0.9rem] font-bold uppercase tracking-[0.80rem] text-blue-300 ssm:text-[1rem]">
      {props.value}
    </p>
  );
}
