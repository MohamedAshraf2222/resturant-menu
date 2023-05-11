import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Roll from "react-reveal/Roll";

const Category = ({ filterByCategory, allCategories }) => {
  // const [categoryArray, setCategoryArray] = useState(allCategories)
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        <div className="">
          <Roll>
            <button
              onClick={() => {
                filterByCategory("الكل");
              }}
              className="btn-menu mx-2"
            >
              الكل
            </button>
            {allCategories.length > 0
              ? allCategories.map((category) => (
                  <button
                    onClick={() => {
                      filterByCategory(category);
                    }}
                    className="btn-menu mx-2"
                  >
                    {category}
                  </button>
                ))
              : ""}
          </Roll>
        </div>
      </Col>
    </Row>
  );
};

export default Category;
