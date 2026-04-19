
import { useEffect, useState } from "react";
import ProductAlsoLike from "../../ProductAlsoLike/ProductAlsoLike";
import ProductInfo from "../../ProductInfo/ProductInfo";
import TapProductDetails from "../../TapProductDetails/TapProductDetails";
import { getProductById } from "../../../services/product-service";
import Loading from "../../Loading/Loading";
import { useParams } from "react-router";


export default function ProductDetails() {

  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams()
  async function getProductId(id) {
    try {
      const respon = await getProductById({ id });
      if (respon.success) {
        setLoading(false);
        setProductDetails(respon.data.data);
      }


    } catch (error) {
      setLoading(false);
      console.log(error);

    }
  }



  useEffect(() => {
    getProductId(id)

  }, [id])
  if (loading) {
    return <Loading />
  }


  return <>
    <div className="container mx-auto">

      <ProductInfo productInfo={productDetails} />

      <TapProductDetails />
      <ProductAlsoLike productInfo={productDetails} />



    </div>



  </>
}

