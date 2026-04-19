import { Link } from "react-router"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import Loading from "../Loading/Loading"
import { CatagoriesContext } from "../../context/Catagories.context"




export default function HomeCatagories() {
    const { catagories, loading } = useContext(CatagoriesContext)


    if (loading) {
        return <Loading />
    }

    return <>
        <div className="container">
            <div>
                <div className="flex justify-between items-center pb-7">
                    <h2 className="text-2xl font-bold">Shop By Catagories</h2>
                    <Link to="/catagories" className="text-primary-600">
                        <div className="flex items-center">
                            <h3>view all catagories</h3>
                            <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
                        </div>
                    </Link>
                </div>
                <div className="cardCatagory grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-10 ">
                    {catagories.map((catagory) =>
                    (<Link to={`/catagories/${catagory._id}`} key={catagory._id} className="p-8 shadow-xl cursor-pointer hover:shadow-2xl border flex flex-col justify-center items-center border-white rounded-lg">
                        <div className="catagoryTitle">
                            <img className="size-16 rounded-full object-cover " src={catagory.image} alt="" />
                        </div>
                        <div className="catagoryContent">
                            <h3>{catagory.name}</h3>

                        </div>
                    </Link>)
                    )}

                </div>
            </div>
        </div>
    </>



}
