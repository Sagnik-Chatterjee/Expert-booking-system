import {
  useEffect,
  useState,
} from "react";

import api from "../api/axios";

import ExpertCard from "../components/ExpertCard";

const Experts = () => {

  const [experts, setExperts] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("");

  const fetchExperts = async () => {
 const res = await api.get(
      `/experts?search=${search}&category=${category}`
    );

    setExperts(
      res.data.experts
    );
  };

  useEffect(() => {
    fetchExperts();
  }, [search, category]);

  return (
    <div className="container">

      <h1>
        Experts
      </h1>

      <div className="flex gap-3 mb-5">
        <input
          placeholder="Search"
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

        <input
          placeholder="Category"
          onChange={(e) =>
            setCategory(
              e.target.value
            )
          }
        />
      </div>

      <div className="grid-layout">
        {experts.map((expert) => (
          <ExpertCard
            key={expert._id}
            expert={expert}
          />
        ))}
      </div>
    </div>
  );
};

export default Experts;