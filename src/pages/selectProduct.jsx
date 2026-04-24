import { useParams } from "react-router-dom";
import Product from "./tool/product";
import { PRODUCT } from "./TenjiObject/prodactData";

export default function SelectProduct() {

    const {productNum} = useParams();

    const productData = PRODUCT[productNum]

  return (
    <>
        <Product
        title={productData.TITLE}
        mainTxt={productData.MAIN}
        img1={productData.IMG1}
        img2={productData.IMG2}
        img3={productData.IMG3}
        like={productData.LIKE}
        />
    </>
  )
}
