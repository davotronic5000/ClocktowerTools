interface ToastProps {
    style: "error" | "warning" | "success" | "info";
}

const Toast = ({ style }: ToastProps) => {
    return <div className="bg-gray-200 px-4 py-2">Toast!</div>;
};

export default Toast;
