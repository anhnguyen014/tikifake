import HomePage from "../pages/HomePages/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPages from "../pages/OrderPages/OrderPages";
import ProductPage from "../pages/ProductPages/ProductPage";

export const routes =[
    {
        path : "/",
        page : HomePage,
        isShowHeader: true
    },
    {
        path: "/order",
        page: OrderPages,
        isShowHeader: true
    },
    {
        path: "/products",
        page : ProductPage,
        isShowHeader: true

    },
    {
        path: "*",
        page :NotFoundPage
    }
]