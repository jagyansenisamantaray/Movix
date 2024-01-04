

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

// eslint-disable-next-line react/prop-types
const Recommendation = ({ mediaType, id }) => {
    const { data, loading } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );

    return (
        <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;