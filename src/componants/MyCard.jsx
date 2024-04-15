import React from "react";
import { Card, Badge, Button } from "react-bootstrap";
import MyCarousel from "../MyCarousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { FaShare } from "react-icons/fa";
function MyCard({ land }) {
  return (
    <Card style={{ width: "18rem" }}>
      <div style={{ position: "relative" }}>
        <MyCarousel land={land} />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        >
          <FaChevronLeft />
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        >
          <FaChevronRight />
        </div>
        <div
          className="d-flex gap-2"
          style={{
            position: "absolute",
            top: "10%",
            right: "10px",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        >
          <FaShare />

          <MdFavoriteBorder />
        </div>
      </div>
      <Card.Body>
        <br />
        <Card.Text className="text-muted " style={{ fontWeight: "bold" }}>
          {" "}
          {land.village_name},{land.mandal_name}
        </Card.Text>

        <Card.Text className="text-muted">
          {" "}
          ₹
          {`${land.price_per_acre_crore.crore}crores ${land.price_per_acre_crore.lakh} lakh`}{" "}
         
        </Card.Text>
        <Card.Text className="text-muted">
         
          {`price per acre:-₹${land.price_per_acre} Lakh per acre`}{" "}
        </Card.Text>
        <Card.Text className="text-muted">
          {" "}
          ₹{land.price_per_acre_crore.lakh}crores per acre
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
