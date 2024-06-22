import React from "react";
import { Link } from "react-router-dom";

const Catalogue = () => {
  return (
    <div className="w-[600px] lg:w[1200px] mx-auto flex items-center space-x-8 mt-4 text-sm font-semibold">
      <div>
        <Link
          to="/article/business"
          className="text-gray-700 hover:border-b-2 border-green-700 active:text-blue-950 py-1"
        >
          Business
        </Link>
      </div>
      <div>
        <Link
          to="/article/entertainment"
          className="text-gray-700 hover:border-b-2 border-green-700 active:text-blue-950 py-1"
        >
          Entertainment
        </Link>
      </div>
      <div>
        <Link
          to="/article/health"
          className="text-gray-700 hover:border-b-2 border-green-700 active:text-blue-950 py-1"
        >
          Health
        </Link>
      </div>
      <div>
        <Link
          to="/article/science"
          className="text-gray-700 hover:border-b-2 border-green-700 active:text-blue-950 py-1"
        >
          Science
        </Link>
      </div>
      <div>
        <Link
          to="/article/sports"
          className="text-gray-700 hover:border-b-2 border-green-700 active:text-blue-950 py-1"
        >
          Sports
        </Link>
      </div>
      <div>
        <Link
          to="/article/technology"
          className="text-gray-700 hover:border-b-2 border-green-700 active:text-blue-950 py-1"
        >
          Technology
        </Link>
      </div>
    </div>
  );
};

export default Catalogue;
