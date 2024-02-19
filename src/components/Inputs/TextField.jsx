import styles from "./input.module.css";

const TextField = ({
    id,
    label,
    placeholder,
    onChangeHandler,
    name,
    value,
    error
}) => {
    return <div class={styles.inputWrapper}>
        <label htmlFor={id}>{label}</label>
        <input value={value} name={name} onChange={onChangeHandler} placeholder={placeholder} id={id} className={styles.input} />
       {!!error && <span style={{color: "red"}}>{error}</span>}
    </div>
}

export default TextField;
