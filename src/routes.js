import React from "react";
import loadable from "@loadable/component";
import CONST from "./constant";

// import component
const Customer = loadable(() => import("./pages/Customer"));
const EditCustomer = loadable(() => import("./pages/Customer/EditCustomer"));
const AddCustomer = loadable(() => import("./pages/Customer/AddCustomer"));
const NotFound = loadable(() => import("./pages/NotFound"));
const Dashboard = loadable(() => import("./pages/Dashboard"));
const SubmissionProduct = loadable(() => import("./pages/SubmissionProduct"));
const EditSubmissionProduct = loadable(() =>
  import("./pages/SubmissionProduct/EditSubmissionProduct")
);
const AddSubmissionProduct = loadable(() =>
  import("./pages/SubmissionProduct/AddSubmissionProduct")
);

const ROUTES = {
  dashboard: [
    {
      path: CONST.PATH.DASHBOARD.URL,
      component: <Dashboard />,
      index: true,
    },
    {
      path: CONST.PATH.NOTFOUND,
      component: <NotFound />,
    },
  ],
  customer: [
    {
      path: CONST.PATH.CUSTOMER.URL,
      component: <Customer />,
      index: true,
    },
    {
      path: CONST.PATH.CUSTOMER.EDIT_CUSTOMER,
      component: <EditCustomer />,
    },
    {
      path: CONST.PATH.CUSTOMER.ADD_CUSTOMER,
      component: <AddCustomer />,
    },
    {
      path: CONST.PATH.NOTFOUND,
      component: <NotFound />,
    },
  ],
  submissionproduct: [
    {
      path: CONST.PATH.SUBMISSION_PRODUCT.URL,
      component: <SubmissionProduct />,
      index: true,
    },
    {
      path: CONST.PATH.SUBMISSION_PRODUCT.EDIT_SUBMISSION_PRODUCT,
      component: <EditSubmissionProduct />,
    },
    {
      path: CONST.PATH.SUBMISSION_PRODUCT.ADD_SUBMISSION_PRODUCT,
      component: <AddSubmissionProduct />,
    },
    {
      path: CONST.PATH.NOTFOUND,
      component: <NotFound />,
    },
  ],
};

export default ROUTES;
