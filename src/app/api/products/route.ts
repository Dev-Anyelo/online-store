import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await fetch("https://api.escuelajs.co/api/v1/products");
    const res = await products.json();

    return NextResponse.json(res);
  } catch (error) {
    return {
      error: "Something went wrong",
    };
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log(data);

    const newProduct = await db.product.create({
      data: data,
    });

    return NextResponse.json(newProduct);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "No se pudo crear el producto" },
      { status: 500 }
    );
  }
}
