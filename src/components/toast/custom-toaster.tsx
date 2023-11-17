"use client";

import { ToastContainer } from "react-toastify";

const CustomToaster = () => {
    return (
        <ToastContainer
            position="bottom-right"
            pauseOnHover
            pauseOnFocusLoss
            theme="dark"
        />
    );
};

export default CustomToaster;
