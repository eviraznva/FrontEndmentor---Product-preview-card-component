"use client";

import React from "react";
import { Img, ImgProps } from "./img";
import { Body } from "./body";

interface PreviewCardProps {
  children?: React.ReactNode;
}

class PreviewCard extends React.Component<PreviewCardProps> {
  public static Img = (props: ImgProps): JSX.Element => <Img {...props} />;

  render(): React.ReactNode {
    return (
      <section className="flex h-[58rem] w-[30rem] flex-col rounded-3xl bg-white ssm:h-[57.5rem] ssm:w-[34rem] md:h-[50rem] md:w-[65rem] md:flex-row">
        {this.props.children}
      </section>
    );
  }
}

export { PreviewCard, Body };
