import {
    Home,
    Login,
    ProductPage,
    ProductsCatalog,
    Register,
    ResetPassword,
    About,
    ContactUs,
    PrivacyPolicy
} from "../pages";

import {IRoute} from "../models/IRoute.ts";

export const routes: IRoute[] = [
    {
        path: '/',
        element: Home,
    },
    {
        path: '/about',
        element: About,
    },
    {
        path: '/contact-us',
        element: ContactUs,
    },
    {
        path: '/privacy-policy',
        element: PrivacyPolicy,
    },
    // auth
    {
        path: '/contact-us',
        element: Login,
    },
    {
        path: '/reset-password',
        element: ResetPassword,
    },
    {
        path: '/register',
        element: Register,
    },

    // products
    {
        path: '/products',
        element: ProductsCatalog,
    },
    {
        path: '/products/:id',
        element: ProductPage,
    },
]