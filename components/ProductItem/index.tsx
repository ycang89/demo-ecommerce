import * as React from "react";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ProductItemBox, ProductItemName, ProductImageWrapper } from "./styled";
import { toPriceWithTwoDecimal } from "@/utils/adapters/products";

export default function Index({
  name,
  price,
  currency,
  image,
  id,
}: {
  name: string;
  price: number;
  currency: string;
  image: string;
  id: number;
}) {
  return (
    <Link href={`/product/${id}`}>
      <ProductItemBox data-cy="product-item">
        {image ? (
          <ProductImageWrapper>
            <Image
              src={image}
              alt={name}
              layout="fill"
              objectFit="contain"
              objectPosition="contain"
            />
          </ProductImageWrapper>
        ) : null}
        <ProductItemName align="center">{name}</ProductItemName>
        <Typography variant="body2" align="center">
          <span data-cy="product-currency">{currency}</span>{" "}
          {toPriceWithTwoDecimal(price)}
        </Typography>
      </ProductItemBox>
    </Link>
  );
}
