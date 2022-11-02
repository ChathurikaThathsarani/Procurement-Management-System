import React, { useEffect, useState } from "react";
import { ScrollView, TextInput } from "react-native";
import { ListItem, Icon, Button } from "@rneui/themed";
import orderservice from "../services/orderservice";
import RNPickerSelect from "react-native-picker-select";
import SuccesScreen from "./components/SuccesScreen";
import { convertToTitleCase } from "../services/utils";
const EditDraftScreen = ({ route, navigation }) => {
  const [order, setOrder] = useState({});
  const [productlist, setProductlist] = useState([]);

  const [selectedValue, setSelectedValue] = useState("");
  const [qty, setQty] = useState(0);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    setOrder({});

    orderservice
      .getOrder(route.params.id)
      .then((data) => {
        const {
          _id,
          status,
          productQty,
          productName,
          totalPrice,
          supplierComment,
          deleiveryDate,
          orderNo,
          updatedAt,
          __v,
          ...rest
        } = data;
        setOrder(rest);
      })
      .catch((e) => console.log(e));

    orderservice
      .getProductForOrder(route.params.id)
      .then((data) => {
        setProductlist(data);
      })
      .catch((e) => console.log(e));
  }, []);

  async function onSubmit() {
    try {
      if(qty != 0){
          await orderservice.draftOrderToPending(
          route.params.id,
          selectedValue,
          qty
        );
        setSuccess(true);
      } else{
        alert("Enter Quantity !");
      }

      
    } catch (error) {
      console.log(error);
    }
  }

  if (success) {
    return (
      <SuccesScreen
        btname="Go to Draft Orders"
        text="Approved Successfully."
        nextScreen="DrawerNavigationRoutes"
        navigation={navigation}
      />
    );
  }

  return (
    <ScrollView>
      {Object.entries(order).map(([key, value], i) => {
        return (
          <ListItem key={i} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{convertToTitleCase(key)}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Content right>
              <ListItem.Title right style={{ color: "green" }}>
                {value}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        );
      })}

      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Product Name</ListItem.Title>
        </ListItem.Content>
        <ListItem.Content right>
          <RNPickerSelect
            // selectedValue={selectedValue}
            value={selectedValue}
            onValueChange={(value) => setSelectedValue(value)}
            // value={selectedValue}
            items={productlist.map((item) => {
              return { label: item.productName, value: item.productName };
            })}
          />
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Product Quantity</ListItem.Title>
        </ListItem.Content>
        <ListItem.Content right>
          <TextInput
            // style={styles.inputStyle}
            onChangeText={(val) => setQty(val)}
            placeholder="Enter quantuty" //dummy@abc.com
            placeholderTextColor="#8b9cb5"
            autoCapitalize="none"
            keyboardType="default"
            returnKeyType="next"
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
          />
        </ListItem.Content>
      </ListItem>
      <Button
        onPress={onSubmit}
        title="Submit"
        icon={{ name: "update", color: "white" }}
        buttonStyle={{ minWidth: "50%", backgroundColor: "#307ecc" }}
      />
    </ScrollView>
  );
};

export default EditDraftScreen;
