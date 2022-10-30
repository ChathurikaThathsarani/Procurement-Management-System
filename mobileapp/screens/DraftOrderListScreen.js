import React, { useEffect, useState } from "react";
import { ScrollView, Text, StyleSheet, Alert } from "react-native";
import { ListItem, Icon, Button } from "@rneui/themed";
import orderservice from "../services/orderservice";

const DraftOrderListScreen = ({ navigation }) => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    setOrderList([]);

    orderservice
      .getDraftOrders()
      .then((data) => {
        console.log(data);
        setOrderList(data);
      })
      .catch((e) => console.log(e));
  }, []);

  async function onDelete(id) {
    Alert.alert(
      "Delete",
      "Are you sure? You want to delete the order?",
      [
        {
          text: "Cancel",
          onPress: () => {
            return null;
          },
        },
        {
          text: "Confirm",
          onPress: async () => {
            await orderservice.deleteDraftOrder(id);
            setOrderList(orderList.filter((item) => item._id != id));
          },
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <>
      <ScrollView style={styles.con}>
        {orderList.map((l, i) => (
          <ListItem.Swipeable
            key={i}
            containerStyle={{
              marginBottom: 10,
              borderRadius: 2,
              borderColor: "#307ecc",
              borderWidth: 2,
            }}
            bottomDivider
            rightContent={(reset) => (
              <>
                <Button
                  onPress={() => {
                    reset();
                    navigation.navigate("EditDraftScreen", { id: l._id });
                  }}
                  title="Edit"
                  icon={{ name: "update", color: "white" }}
                  buttonStyle={{ minHeight: "43%", backgroundColor: "blue" }}
                />

                <Button
                  onPress={async () => {
                    reset();
                    onDelete(l._id);
                  }}
                  title="Delete"
                  icon={{ name: "info", color: "white" }}
                  buttonStyle={{ minHeight: "43%", backgroundColor: "red" }}
                />
              </>
            )}
          >
            <ListItem.Content>
              <ListItem.Subtitle>
                Supplier:{" "}
                <Text style={{ color: "red" }}> {l.supplierName}</Text>
              </ListItem.Subtitle>

              <ListItem.Subtitle>Site Name: {l.siteName}</ListItem.Subtitle>
              <ListItem.Subtitle>Placed Date: {l.placedDate}</ListItem.Subtitle>
            </ListItem.Content>

            <ListItem.Content right>
              <ListItem.Title right style={{ color: "green" }}>
                {l.status}
              </ListItem.Title>

              <ListItem.Subtitle>
                Required Date: {l.requiredDate}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem.Swipeable>
        ))}
      </ScrollView>
    </>
  );
};

export default DraftOrderListScreen;
const styles = StyleSheet.create({
  con: {
    padding: 10,
  },
});
