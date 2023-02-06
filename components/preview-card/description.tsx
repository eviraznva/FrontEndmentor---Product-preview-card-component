export interface DescriptionProps {
  value: string;
}

export function Description(props: DescriptionProps): JSX.Element {
  return (
    <p className="mt-1 mb-2 font-montserrat font-medium text-blue-300 md:mt-4 md:mb-9">
      {props.value}
    </p>
  );
}
