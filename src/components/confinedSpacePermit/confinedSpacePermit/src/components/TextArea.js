import styles from "./TextArea.module.css";
function TextArea({ children, isolate, setIsolate, device, setDevice }) {
  return (
    <div className={styles.padding}>
      {children}:<br />
      <textarea className={styles.size} required name="textArea"></textarea>
    </div>
  );
}

export default TextArea;
