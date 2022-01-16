import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const [loding, setLoding] = useState(true);
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoding(false);
  };
  useEffect(getMovieDetail, []);

  return (
    <div>
      {loding ? (
        <h1>Loding...</h1>
      ) : (
        <div>
          <img src={detail.medium_cover_image} alt={detail.title} />
          <h1>
            {detail.title_long}[{detail.rating}]
          </h1>
          <b>Run Time : {detail.runtime}m</b>
          <p>{detail.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
