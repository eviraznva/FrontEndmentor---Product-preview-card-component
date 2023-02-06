import React from "react";
import { Button } from "./button";
import { Description, DescriptionProps } from "./description";
import { Label, LabelProps } from "./label";
import { Price, PriceProps } from "./price";
import { Title, TitleProps } from "./title";

interface BodyProps {
  children?: React.ReactNode;
}

export class Body extends React.Component<BodyProps> {
  public static Label = (props: LabelProps) => <Label {...props} />;
  public static Title = (props: TitleProps) => <Title {...props} />;
  public static Description = (props: DescriptionProps) => (
    <Description {...props} />
  );
  public static Price = (props: PriceProps) => <Price {...props} />;
  public static Button = () => <Button />;

  render(): React.ReactNode {
    return (
      <div className="flex flex-col p-8 ssm:p-10 md:w-1/2 md:p-16">
        {this.props.children}
      </div>
    );
  }
}
