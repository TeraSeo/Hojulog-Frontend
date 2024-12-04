import React from "react";
import { useParams } from "react-router-dom";
import DetailedTechnologyPostPage from "../pages/post/DetailedTechnologyPostPage";
import DetailedLifeStylePostPage from "../pages/post/DetailedLifeStylePostPage";
import DetailedEntertainmentPostPage from "../pages/post/DetailedEntertainmentPostPage";
import DetailedEducationPage from "../pages/post/DetailedEducationPage";
import DetailedRestaurantPostPage from "../pages/post/DetailedRestaurantPostPage";


export const detailedPageComponents = {
  Technology: DetailedTechnologyPostPage,
  Restaurant: DetailedRestaurantPostPage,
  Lifestyle: DetailedLifeStylePostPage,
  Entertainment: DetailedEntertainmentPostPage,
  Education: DetailedEducationPage,
};

export const DynamicDetailedPage = () => {
  const { category, formattedTitle } = useParams();
  const Component = detailedPageComponents[category];

  if (!Component) {
    return <div>Page not found</div>;
  }

  return <Component title={formattedTitle} />;
};
