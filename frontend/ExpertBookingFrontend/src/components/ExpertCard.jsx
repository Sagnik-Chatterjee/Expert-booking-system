import { Link } from "react-router-dom";

const ExpertCard = ({
  expert,
}) => {

  return (
    <div className="card">

      <h2>
        {expert.name}
      </h2>

      <p>
        Category: {expert.category}
      </p>

      <p>
        Experience: {expert.experience} Years
      </p>
      <p>
        Rating: ⭐ {expert.rating}
      </p>

      <Link
        to={`/experts/${expert._id}`}
      >
        View Details
      </Link>
    </div>
  );
};

export default ExpertCard;