import { useState } from "react";

import { FaStar } from "react-icons/fa";
import { myAxios, privateAxios } from "../services/helpler";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Rating({ vId }) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
    privateAxios({
      url: `http://192.168.29.130:5000/api/rating/vehicle/${vId}/ratings`,
      method: "POST",
      data: {
        noOfStars: value,
      },
    }).then((res) => {
      console.log("rating response success");
    });
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div style={styles.container}>
      {/* <h2> React Ratings </h2> */}
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={
                (hoverValue || currentValue) > index
                  ? colors.orange
                  : colors.grey
              }
              style={{
                marginRight: 6,
                cursor: "pointer",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  //   container: {
  //     display: "flex",
  //     flexDirection: "column",
  //     alignItems:"center"
  //   },
  //   stars: {
  //     display: "flex",
  //     flexDirection: "row",
  //   },
};

export default Rating;
