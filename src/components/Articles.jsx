import { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import item1 from "../images/item1.png";
import item2 from "../images/item2.png";
import item3 from "../images/item3.png";
import item4 from "../images/item4.png";
import item5 from "../images/item5.png";
import item6 from "../images/item6.png";
import "./Articles.css";

const Articles = () => {
  const [first, setFirst] = useState(true);
  const cardData = [
    { imgsrc: item1, title: "Grilled Tomatoes at Home" },
    { imgsrc: item2, title: "Snacks for Travel" },
    { imgsrc: item3, title: "Post-workout Recipes" },
    { imgsrc: item4, title: "How To Grill Corn" },
    { imgsrc: item5, title: "Crunchwrap Supreme" },
    { imgsrc: item6, title: "Broccoli Cheese Soup" },
  ];

  const Cards = ({ startIndex, endIndex }) => (
    <>
      {cardData.slice(startIndex, endIndex).map((item, index) => (
        <Box className="card" key={index}>
          <img src={item.imgsrc} className="cardImg" alt={item.title} />
          <p className="cardTitle">{item.title}</p>
          <p className="cardDesc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard...
          </p>
          <Button className="btn" style={{ borderRadius: '21px', backgroundColor:'#FFFFFF' }}>Read More</Button>
        </Box>
      ))}
    </>
  );

  return (
    <Box>
      <p className="headingA">Latest Articles</p>
      <Box className="cards">
        {first ? <Cards startIndex={0} endIndex={3} /> : <Cards startIndex={3} endIndex={6} />}
        <Box className="btns" >
          <Button mt={-2.5} className="btn2" onClick={() => setFirst(true)} disabled={first} style={{ backgroundColor:'#FFFFFF' }} >
            &#8826;
          </Button>
          &nbsp;&nbsp;
          {first ? 1 : 2}/2&nbsp;
          <Button mt={-2.5} className="btn22" onClick={() => setFirst(false)} disabled={!first} style={{  backgroundColor:'#FFFFFF'}}>
            &#8827;
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Articles;

// import React, { useState } from "react";
// import item1 from "../images/item1.png";
// import item2 from "../images/item2.png";
// import item3 from "../images/item3.png";
// import item4 from "../images/item4.png";
// import item5 from "../images/item5.png";
// import item6 from "../images/item6.png";
// import "./Articles.css";

// const Articles = () => {
//   const [first, setFirst] = useState(true);
//   const cardData = [
//     { imgsrc: item1, title: "Grilled Tomatoes at Home" },
//     { imgsrc: item2, title: "Snacks for Travel" },
//     { imgsrc: item3, title: "Post-workout Recipes" },
//     { imgsrc: item4, title: "How To Grill Corn" },
//     { imgsrc: item5, title: "Crunchwrap Supreme" },
//     { imgsrc: item6, title: "Broccoli Cheese Soup" },
//   ];

//   const Cards = ({ startIndex, endIndex }) => (
//     <>
//       {cardData.slice(startIndex, endIndex).map((item, index) => (
//         <div className="card" key={index}>
//           <img src={item.imgsrc} className="cardImg" alt={item.title} />
//           <p className="cardTitle">{item.title}</p>
//           <p className="cardDesc">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard...
//           </p>
//           <button className="btn">Read More</button>
//         </div>
//       ))}
//     </>
//   );

//   return (
//     <div>
//       <p className="headingA">Latest Articles</p>
//       <div className="cards">
//         {first ? <Cards startIndex={0} endIndex={3} /> : <Cards startIndex={3} endIndex={6} />}
//         <div className="btns">
//           <button className="btn2" onClick={() => setFirst(true)} disabled={first}>
//             &#8826;
//           </button>
//           &nbsp;&nbsp;
//           {first ? 1 : 2}/2&nbsp;
//           <button className="btn22" onClick={() => setFirst(false)} disabled={!first}>
//             &#8827;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Articles;
