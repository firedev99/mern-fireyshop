import React, { useState } from 'react';
// logos 
import { DownChevron } from "../../helpers/avatar";
// styled 
import { Wrapper, StarsWrapper, ReviewMeta } from "./style/ratingStyles";

export default function Rating({ ratingValue, reviews, fontSize }) {
    const [selectedStar, setSelectedStar] = useState(ratingValue || 0);

    const handleClick = (val) => {
        setSelectedStar(val);
    }

    // useEffect(() => {
    //     console.log(`Rating: ${selectedStar}`);
    // }, [selectedStar]);

    return (
        <Wrapper>
            {[...Array(5)].map((n, i) => (
                <StarsWrapper key={`ratings-${i}`} onClick={() => handleClick(i + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={i < selectedStar ? "#FFA41C" : "none"} stroke={i < selectedStar ? "none" : "#FFA41C"} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                </StarsWrapper>
            ))}
            <ReviewMeta>
                <DownChevron />
                <span style={{ fontSize: fontSize || "12px" }}>{reviews} REVIEWS</span>
            </ReviewMeta>
        </Wrapper>
    )
}
