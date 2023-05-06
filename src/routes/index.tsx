import { Navigate, createBrowserRouter } from "react-router-dom";
import { Accessory, Detail, Home, Phone, Search } from "../pages/product";
import DefaultLayout from "../layouts/DefaultLayout";
import { Cart, Profile } from "@pages/user";
import { AdminLayout } from "@layouts/AdminLayout";
import { Customer, ExportInvoice, ImportInvoice, Product, Specification, Staff, Supplier } from "@pages/admin";

const router = createBrowserRouter([
	{
		path: "/",
		// element: <Navigate to="/home" />,
		element: <Navigate to="/admin" />,
	},
	{
		path: "/admin",
		element: <AdminLayout />,
		children: [
			{
				path: "",
				element: <Navigate to="/admin/product" />,
			},
			{
				path: "product",
				element: <Product />,
			},
			{
				path: "supplier",
				element: <Supplier />,
			},
			{
				path: "staff",
				element: <Staff />,
			},
			{
				path: "customer",
				element: <Customer />,
			},
			{
				path: "specification",
				element: <Specification />,
			},
			{
				path: "export-invoice",
				element: <ExportInvoice />,
			},
			{
				path: "import-invoice",
				element: <ImportInvoice />,
			},
		],
	},
	{
		path: "/home",
		element: <DefaultLayout />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "phone",
				element: <Phone />,
			},
			{
				path: "accessory",
				element: <Accessory />,
			},
			{
				path: "search",
				element: <Search />,
			},
			{
				path: "detail/:product",
				element: <Detail />,
			},
		],
	},
	{
		path: "/user",
		element: <DefaultLayout></DefaultLayout>,
		children: [
			{
				path: "profile",
				element: <Profile />,
			},
			{
				path: "cart",
				element: <Cart />,
			},
		],
	},
]);

export default router;
