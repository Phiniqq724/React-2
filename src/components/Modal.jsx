import styles from './Modal.module.css'

export default function Modal(props) {
    return (
        <>
            <div className={styles.backdrop} onClick={props.onClose} />
            <dialog open={true} className={styles.modal}>
                {props.children}
            </dialog>
        </>
    )
}