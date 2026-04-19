import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useCallback } from "react";
import { getAllProduct } from "../../services/product-service";
import Loading from "../Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useParams } from "react-router";

export default function ProductAlsoLike({ productInfo }) {
    const { category } = productInfo;
    const [realate, setRealate] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const featchRelateProduct = useCallback(async () => {
        try {
            setLoading(true);
            const respon = (await getAllProduct({ category: category._id })).data.data;
            setLoading(false);
            setRealate(respon);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }, [category._id]);

    useEffect(() => {
        featchRelateProduct();
    }, [id, featchRelateProduct]);

    if (loading) {
        return <Loading />;
    }

    return <>
        <h2 className="text-2xl font-semibold mt-10 mb-4">You May Also Like</h2>
        <div className="relative">
            <button className="swiper-custom-prev absolute hover:bg-primary-200 transition-colors duration-300 right-15 -top-5 -translate-y-1/2 bg-white w-10 h-10 flex items-center justify-center shadow rounded-full">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="swiper-custom-next absolute hover:bg-primary-200 transition-colors duration-300 right-0 -top-5 -translate-y-1/2 bg-white w-10 h-10 flex items-center justify-center shadow rounded-full">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <div className="flex gap-6 justify-around overflow-x-auto pb-3 mt-2">
                <Swiper
                    modules={[Navigation]}
                    navigation={{ prevEl: '.swiper-custom-prev', nextEl: '.swiper-custom-next' }}
                    breakpoints={{ 0: { slidesPerView: 1 }, 640: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }}
                    spaceBetween={10}
                    loop={true}>
                    {realate.map((product) => (
                        <SwiperSlide key={product._id}>
                            <ProductCard productInfo={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </>;
}
