import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { siteMangerLoginReducer, siteManagerRegisterReducer } from "./reducers/siteManagerReducer";
import { supplierLoginReducer, supplierRegisterReducer } from "./reducers/supplierReducer";
import { staffLoginReducer, staffRegisterReducer } from "./reducers/staffReducer";
import {
	draftOrderCreateReducer,
	draftOrderListReducer,
	draftOrderDeleteReducer,
	draftOrderToPendingOrderReducer,
	OrderListReducer,
	orderToApproveReducer,
	supplierOrderListReducer,
	orderToPlacedReducer,
	placedOrderListReducer,
	OrderStaffListReducer,
	StaffOrderToApproveReducer,
} from "./reducers/orderReducer";
import { goodReceiptListReducer, goodReceiptCreateReducer } from "./reducers/goodReceiptReducer";
import { invoiceListReducer, invoiceCreateReducer } from "./reducers/invoiceReducer";
import {
	productCreateReducer,
	productListReducer,
	productDeleteReducer,
	productUpdateReducer,
	viewProductListForSiteManagerReducer,
	viewProductListForStaffReducer,
} from "./reducers/productReducer";
import { SiteListReducer, SiteCreateReducer, SiteUpdateReducer, SiteDeleteReducer } from "./reducers/siteReducer";

// combine all the reducers
const reducer = combineReducers({
	siteManager_Login: siteMangerLoginReducer,
	supplier_Login: supplierLoginReducer,
	staff_Login: staffLoginReducer,
	draftOrderCreate: draftOrderCreateReducer,
	draftOrderList: draftOrderListReducer,
	draftOrderDelete: draftOrderDeleteReducer,
	draftOrderToPending: draftOrderToPendingOrderReducer,
	orderList: OrderListReducer,
	orderToApprove: orderToApproveReducer,
	supplier_Orders: supplierOrderListReducer,
	orderToPlaced: orderToPlacedReducer,
	placedOrderList: placedOrderListReducer,
	goodReceiptCreate: goodReceiptCreateReducer,
	goodReceiptList: goodReceiptListReducer,
	invoiceCreate: invoiceCreateReducer,
	invoiceList: invoiceListReducer,
	productCreate: productCreateReducer,
	productList: productListReducer,
	productDelete: productDeleteReducer,
	productUpdate: productUpdateReducer,
	viewProductListForSiteManager: viewProductListForSiteManagerReducer,
	viewProductListForStaff: viewProductListForStaffReducer,
	staffRegistration: staffRegisterReducer,
	supplierRegistration: supplierRegisterReducer,
	siteManagerRegistration: siteManagerRegisterReducer,
	site_view_list: SiteListReducer,
	Site_Management_Create: SiteCreateReducer,
	site_Management_Update: SiteUpdateReducer,
	site_Management_delete: SiteDeleteReducer,
	order_List_Staff: OrderStaffListReducer,
	Staff_order_To_Approve: StaffOrderToApproveReducer,
});

const siteManagerInfoFromStorage = localStorage.getItem("siteManagerInfo")
	? JSON.parse(localStorage.getItem("siteManagerInfo"))
	: null;

const supplierInfoFromStorage = localStorage.getItem("supplierInfo")
	? JSON.parse(localStorage.getItem("supplierInfo"))
	: null;

const staffInfoFromStorage = localStorage.getItem("staffInfo") ? JSON.parse(localStorage.getItem("staffInfo")) : null;

const initialState = {
	siteManager_Login: { siteManagerInfo: siteManagerInfoFromStorage },
	supplier_Login: { supplierInfo: supplierInfoFromStorage },
	staff_Login: { staffInfo: staffInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
