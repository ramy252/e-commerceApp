import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt as halfStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

export default function Rating({ value }) {
    // const fullStars = Math.floor(value);            // 4
    // const hasHalfStar = value % 1 >= 0.5;           // true or false
    // const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    // return (
    //     <div className="flex items-center gap-1 text-yellow-500">
    //         {[...Array(fullStars)].map((_, i) => (
    //             <FontAwesomeIcon key={`full-${i}`} icon={fullStar} />
    //         ))}

    //         {/* نصف نجمة */}
    //         {hasHalfStar && <FontAwesomeIcon icon={halfStar} />}

    //         {/* نجوم فاضية */}
    //         {[...Array(emptyStars)].map((_, i) => (
    //             <FontAwesomeIcon key={`empty-${i}`} icon={emptyStar} />
    //         ))}
    //     </div>
    // );
    function getStarsIcons(ratingsAverage) {
        if (value >= ratingsAverage) {
            return fullStar;
        } else if (value >= ratingsAverage - 0.5) {
            return halfStar;
        } else {
            return emptyStar;
        }

    }
    return <>
        <div className="stars text-yellow-300">
            {[1, 2, 3, 4, 5].map( (ratingsAverage) => (<FontAwesomeIcon key={ratingsAverage} icon={getStarsIcons(ratingsAverage)} />
            ))}

        </div>
    </>
}
