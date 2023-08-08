import React from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useEffect } from "react";
import { db } from "../firebase";
import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { useCallback } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { mobile } from "../responsive";
import AdminReview from "../components/AdminReview";

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  margin-top: 100px;
`;
const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: fit-content;
  flex-wrap: wrap;
  margin: 30px 40px 60px;
  padding: 20px;
  gap: 2rem;
  background: #bde0ff;
  // width: 90%;
  // display: grid;
  // grid-template-columns: 25% auto;
  ${mobile({
    flexDirection: "column",
    margin: "30px 5px 10px",
  })}
`;

const Continer = styled.div`
  align-items: center;
  display: flex;
  // width: 90%;
  justify-content: center;
  margin-top: 20px;
  margin-left: 2rem;
  flex: 1 1 auto;
  margin-right: 2rem;
  padding: 20px;
`;

const OrderWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 550px;
  margin-top: 20px;
  padding: 20px;
  background: #e2eaff;
  ${mobile({
    height: "450px",
  })}
`;
const Admin = () => {
  const ordersCollectionRef = collection(db, "order");
  const [userId, setUserId] = useState("");
  const { user } = useUserAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [userOrders, setUserOrders] = useState(undefined);
  const [updateOrders, setUpdateOrders] = useState(undefined);

  const getOrders = useCallback(async () => {
    try {
      const data = await getDocs(ordersCollectionRef);
      const orders = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setUserOrders(orders);
    } catch (err) {
      console.log(err);
    }
  }, [ordersCollectionRef]);

  useEffect(() => {
    if (!Boolean(userOrders)) {
      getOrders();
    }
  }, [userOrders, getOrders]);

  useEffect(() => {
    if (!userId) {
      setUpdateOrders(userOrders);
    }
  }, [userId, userOrders]);

  const filterData = () => {
    const filterData = userOrders.filter((order) => order.userId === userId);
    setUpdateOrders(filterData);
  };
  const updateOrderStatus = async (id, status) => {
    const userDoc = doc(db, "order", id);
    const udpatedField = { status };
    await updateDoc(userDoc, udpatedField);
    window.location.reload();
  };
  console.log('user', user)
  return (
    <>
      <Announcement />
      <NavBar />
      <Title>Admin Pannel</Title>
      <Continer>
        {" "}
        <div
          style={{
            flexBasis: "80%",
            justifyContent: "center",
            display: "flex",
          }}
        >
          Please Enter Id of user:
        </div>
        <TextField
          required
          id="user id"
          name="user id"
          label="Enter user id"
          variant="standard"
          fullWidth
          onChange={(e) => setUserId(e.target.value)}
        />
        <Button variant="contained" onClick={filterData} color="primary">
          {" "}
          Search{" "}
        </Button>
      </Continer>

      {user[0]?.uid === "102573091226640558754" && userOrders?.length > 0 ? (
        <>
          <Wrapper>
            {updateOrders?.map((order) => (
              <>
                <OrderWrapper>
                  <AdminReview
                    order={order}
                    products={order?.products}
                    updateOrderStatus={updateOrderStatus}
                  />
                </OrderWrapper>
              </>
            ))}{" "}
          </Wrapper>
        </>
      ) : (
        <Wrapper>No orders with given userd!</Wrapper>
      )}
      <Footer />
    </>
  );
};

export default Admin;
