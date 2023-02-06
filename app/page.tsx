"use client";

import { Body, PreviewCard } from "@/components/preview-card/preview-card";
import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";

export default function Index() {
  return (
    <main className="flex h-full w-full items-center justify-center">
      <Analytics />
      <PreviewCard>
        <PreviewCard.Img
          mobileV="/images/image-product-mobile.jpg"
          desktopV="/images/image-product-desktop.jpg"
        />
        <Body>
          <Body.Label value="perfume" />
          <Body.Title value="Gabrielle Essence Eau De Parfum" />
          <Body.Description value="A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL." />
          <Body.Price discountPrice={149.99} orginalPrice={169.99} />
          <Body.Button />
        </Body>
      </PreviewCard>
    </main>
  );
}
