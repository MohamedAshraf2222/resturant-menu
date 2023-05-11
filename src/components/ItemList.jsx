import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Zoom } from "react-reveal";

const ItemList = ({ itemsData }) => {
  return (
    <Row>
      <Zoom>
        {itemsData.length > 0 ? (
          itemsData.map((item) => (
            <Col sm="12" key={item.id} className="mb-3">
              <Card className="d-flex flex-row bg-card">
                <Card.Img
                  className="img-card"
                  variant="top"
                  src={item.imgUrl}
                />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    <div className="item-title">{item.title}</div>
                    <div className="item-price">{item.price} $</div>
                  </Card.Title>
                  <Card.Text className="py-2">
                    <div className="item-description">{item.description}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <>
            <h2 className="text-center">لا يوجد اصناف الان</h2>
          </>
        )}
      </Zoom>
    </Row>
  );
};

export default ItemList;
