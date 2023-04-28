export const Box = ({ children, className }) => {
    return <div className={"mb-3 mt-4 " + (className || "")}>{children}</div>;
};
  