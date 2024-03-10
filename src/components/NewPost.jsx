import styles from './NewPost.module.css'
import { useState } from 'react'

export default function NewPost(props) {
    const [enteredBody, setEnteredBody] = useState('')
    const [enteredAuthor, setEnteredAuthor] = useState('')

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value)
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value)
    }

    function sumbitHandler(event) {
        event.preventDefault()
        const postData = {
            author: enteredAuthor,
            body: enteredBody
        }
        console.log(postData)
        props.onCancel()
    }

    // document.querySelector('textarea').addEventListener('change', function () {})
    return (
        <form className={styles.form}>
            <p>
                <label htmlFor="name">Your name</label>
                <textarea type="text" id="name" required onChange={authorChangeHandler} />
            </p>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={bodyChangeHandler} /> {/*Event listener*/}
            </p>
            <p className={styles.actions}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button onClick={sumbitHandler}>Submit</button>
            </p>
        </form>
    )
}