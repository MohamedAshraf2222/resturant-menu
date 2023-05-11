import { Button } from "bootstrap";
import React, { useState } from "react";
import {
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import NavbarCo from "../components/Navbar";
import Header from "../components/Header";
import Category from "../components/Category";
import ItemList from "../components/ItemList";
import { items } from "../data.js";

const Home = () => {
  const [itemsData, setItemsData] = useState(items);

  const allCategories = [...new Set(items.map(item => item.category))]

  const filterByCategory = (category) => {
    if (category === "الكل") {
      setItemsData(items);
    } else {
      const arr = items.filter((item) => item.category === category);
      setItemsData(arr);
    }
  };
  const filterBySearch = (word) => {
    if (word != "") {
      const arr = items.filter((item) => item.title === word);
      setItemsData(arr)
    } 
  };
  return (
    <>
      <NavbarCo filterBySearch={filterBySearch}/>
      <Container>
        <Header />
        <Category allCategories={allCategories} filterByCategory={filterByCategory} />
        <ItemList itemsData={itemsData} />
      </Container>
    </>
  );
};

export default Home;
