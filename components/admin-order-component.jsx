import React from "react";
import { Label } from "admin-bro";
import styled from "styled-components";

const imgStyle = {
  width: "30em",
  border: "2px solid gray",
  borderRadius: "11px",
  margin: "1em auto",
};

const Container = styled.div`
  width: 80%;
  background-color: #f1f1f1;
  border-radius: 10px;
  display: flex;
  padding: 0.5em 1em;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 2px solid #3f3f3f;
`;

const Col = styled.div`
  flex-direction: column;
  flex-wrap: wrap;
  margin: 1em;
`;

const ContainerBottom = styled.div`
  width: 80%;
  background-color: #3f3f3f;
  color: #f6f6f6;
  border-radius: 10px;
  padding: 0.2em 1em;
  margin: 0.5em 0;
`;

const AdminShowOrder = (props) => {
  const { record, property } = props;
  const polCarts = record.params;

  // filter the populated array to obtain certain fields
  const id_key = Object.entries(polCarts).filter(([key, value]) => {
    if (key.includes("productId")) {
      return value;
    }
  });

  const code_key = Object.entries(polCarts).filter(([key, value]) => {
    if (key.includes("productCode")) {
      return value;
    }
  });

  const titles_key = Object.entries(polCarts).filter(([key, value]) => {
    if (key.includes("title")) {
      return value;
    }
  });

  const prices_key = Object.entries(polCarts).filter(([key, value]) => {
    if (key.includes("price")) {
      return value;
    }
  });

  const qtys_key = Object.entries(polCarts).filter(([key, value]) => {
    if (key.includes("qty")) {
      return value;
    }
  });

  // store the extracted data into variables to display them
  // the id_key array is used to reference a certain product and take the admin to that product's page
  let count = -1;
  const CodesData = code_key.map((code) => {
    count++;
    return (
      <p key={code}>
        <a
          href={
            "/admin/resources/Product/records/" + id_key[count][1] + "/show"
          }
        >
          {code[1]}
        </a>
      </p>
    );
  });

  const TitlesData = titles_key.map((title) => {
    return <p key={title}>{title[1]}</p>;
  });

  const QtysData = qtys_key.map((qty) => {
    return <p key={qty}>{qty[1]}</p>;
  });

  const PricesData = prices_key.map((price) => {
    return <p key={price}>{price[1]}</p>;
  });

  return (
    <div>
      <Label>Cart Contents:</Label>
      <Container>
        <Col>
          <h3>Product Code</h3>
          {CodesData}
        </Col>
        <Col>
          <h3>Title</h3>
          {TitlesData}
        </Col>
        <Col>
          <h3>Quantity</h3>
          {QtysData}
        </Col>
        <Col>
          <h3>Price</h3>
          {PricesData}
        </Col>
      </Container>
      <ContainerBottom>
        <h4>Total Number of Items: {polCarts["cart.totalQty"]} </h4>
        <h4>Total Cost: {polCarts["cart.totalCost"]} </h4>
      </ContainerBottom>
    </div>
  );
};

export default AdminShowOrder;
