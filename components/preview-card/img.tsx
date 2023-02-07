import styled from "styled-components";

export interface ImgProps {
  desktopV: string;
  mobileV: string;
}

const Image = styled.div<ImgProps>`
  background-image: url("${(props) => props.desktopV}");
  @media (max-width: 767px) {
    background-image: url("${(props) => props.mobileV}");
  }
`;

export function Img(props: ImgProps): JSX.Element {
  return (
    <Image
      {...props}
      className="h-full w-full rounded-tl-3xl rounded-tr-3xl bg-cover md:w-1/2 md:rounded-tr-none  md:rounded-bl-3xl"
    />
  );
}
