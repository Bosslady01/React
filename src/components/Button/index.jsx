import styles from "./button.module.css";

const Button = ({ variant = "primary", size = "medium", fullWidth = true, children, type }) => {
  return (
    <button
      data-fullwidth={fullWidth}
      data-size={size}
      data-variant={variant}
      className={styles.btn}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
