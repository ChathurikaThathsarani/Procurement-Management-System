import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import SiteManagerLoginScreen from "./screens/userManagement/login/SiteMangerLoginScreen";
import SupplierLoginScreen from "./screens/userManagement/login/SupplierLoginScreen";
import StaffLoginScreen from "./screens/userManagement/login/StaffLoginScreen";
import CreateDraftOrder from "./screens/orderManagement/draftOrder/CreateDraftOrder";
import DraftOrderList from "./screens/orderManagement/draftOrder/DraftOrderList";
import DraftOrderToPendingOrder from "./screens/orderManagement/draftOrder/DraftOrderToPendingOrder";
import OrderList from "./screens/orderManagement/orders/OrderList";
import OrderToApprove from "./screens/orderManagement/orders/OrderToApprove";
import SingleOrderView from "./screens/orderManagement/orders/SingleOrderView";
import SupplierOrderList from "./screens/orderManagement/supplierOrder/SupplierOrderList";
import SupplierPlacedOrRejectOrder from "./screens/orderManagement/supplierOrder/SupplierPlacedOrRejectOrder";
import SupplierViewOneOrder from "./screens/orderManagement/supplierOrder/SupplierViewOneOrder";
import HomePage from "./screens/static/homePage/HomePage";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import LoginSelectorPage from "./screens/static/loginSelector/LoginSelectorPage";
import SiteManagerDashboard from "./screens/static/dashboards/SiteMangerDashboard";
import SupplierDashboard from "./screens/static/dashboards/SupplierDashboard";
import StaffDashboard from "./screens/static/dashboards/StaffDashboard";
import PlacedOrderList from "./screens/goodReceipt/PlacedOrderList";
import GoodReceiptList from "./screens/goodReceipt/GoodReceiptList";
import CreateGoodReceipt from "./screens/goodReceipt/CreateGoodReceipt";
import InvoiceOrderList from "./screens/invoice/InvoiceOrderList";
import InvoiceList from "./screens/invoice/InvoiceList";
import CreateInvoice from "./screens/invoice/CreateInvoice";
import CreateSite from "./screens/site/CreateSite";
import SiteList from "./screens/site/SiteList";
import SiteUpdate from "./screens/site/SiteUpdate";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path="/" component={HomePage} exact />
        <Route path="/login-select" component={LoginSelectorPage} exact />
        <Route
          path="/siteManager-login"
          component={SiteManagerLoginScreen}
          exact
        />
        <Route path="/supplier-login" component={SupplierLoginScreen} exact />
        <Route path="/staff-login" component={StaffLoginScreen} exact />
        <Route path="/site-manager" component={SiteManagerDashboard} exact />
        <Route path="/supplier" component={SupplierDashboard} exact />
        <Route path="/staff" component={StaffDashboard} exact />
        <Route path="/create-draft-order" component={CreateDraftOrder} exact />
        <Route path="/draft-orders" component={DraftOrderList} exact />
        <Route
          path="/draft-order-to-pending/:id"
          component={DraftOrderToPendingOrder}
          exact
        />
        <Route path="/orders" component={OrderList} exact />
        <Route path="/order-to-approve/:id" component={OrderToApprove} exact />
        <Route
          path="/single-order-view/:id"
          component={SingleOrderView}
          exact
        />
        <Route path="/supplier-orders" component={SupplierOrderList} exact />
        <Route
          path="/single-supplier-order-edit/:id"
          component={SupplierPlacedOrRejectOrder}
          exact
        />
        <Route
          path="/single-supplier-order-view/:id"
          component={SupplierViewOneOrder}
          exact
        />
        <Route path="/placed-orders" component={PlacedOrderList} exact />
        <Route path="/good-receipts" component={GoodReceiptList} exact />
        <Route path="/good-receipt/:id" component={CreateGoodReceipt} exact />
        <Route
          path="/invoice-placed-orders"
          component={InvoiceOrderList}
          exact
        />
        <Route path="/invoices" component={InvoiceList} exact />
        <Route path="/invoice/:id" component={CreateInvoice} exact />

        <Route path="/site-management-create" component={CreateSite} exact />
        <Route path="/site-management-view" component={SiteList} exact />
        <Route path="/site-management/:id" component={SiteUpdate} exact />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
