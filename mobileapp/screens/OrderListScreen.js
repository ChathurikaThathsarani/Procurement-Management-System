import React, { useEffect, useState } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { ListItem, Icon, Button } from "@rneui/themed";
import orderservice from "../services/orderservice";

const OrderListScreen = ({ navigation }) => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    setOrderList([]);

    orderservice
      .getOrders()
      .then((data) => {
        console.log(data);
        setOrderList(data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <ScrollView style={styles.con}>
        {orderList.map((l, i) => (
          <ListItem.Swipeable
            key={i}
            bottomDivider
            containerStyle={{
              marginBottom: 10,
              borderRadius: 2,
              borderColor: "#307ecc",
              borderWidth: 2,
            }}
            rightContent={(reset) => (
              <>
                <Button
                  onPress={() => {
                    reset();
                    navigation.navigate("OrderDetailScreen", { id: l._id });
                  }}
                  title="Info"
                  icon={{ name: "info", color: "white" }}
                  buttonStyle={{ minHeight: "44%" }}
                />
                <Button
                  onPress={() => {
                    reset();
                    navigation.navigate("OrderApproveScreen", { id: l._id });
                  }}
                  title="Approve"
                  icon={{ name: "update", color: "white" }}
                  buttonStyle={{ minHeight: "44%", backgroundColor: "green" }}
                />
              </>
            )}
          >
            <ListItem.Content>
              <ListItem.Subtitle>
                Supplier:{" "}
                <Text style={{ color: "red" }}> {l.supplierName}</Text>
              </ListItem.Subtitle>

              <ListItem.Subtitle>
                Product Name: {l.productName}
              </ListItem.Subtitle>
              <ListItem.Subtitle>Placed Date: {l.placedDate}</ListItem.Subtitle>
            </ListItem.Content>

            <ListItem.Content right>
              <ListItem.Title right style={{ color: "green" }}>
                {l.status}
              </ListItem.Title>

              <ListItem.Subtitle>Total Price: {l.totalPrice}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem.Swipeable>
        ))}
      </ScrollView>
    </>
  );
};

export default OrderListScreen;

const styles = StyleSheet.create({
  con: {
    padding: 10,
  },
});
