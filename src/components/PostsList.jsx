import Post from './Post'
import styles from './PostsList.module.css'
import NewPost from './NewPost'
import { useState } from 'react'
import Modal from './Modal'

export default function PostsList(props) {
    const [posts, setPosts] = useState([])

    function addPostHandler(postData) {
        setPosts([postData, ...posts]);
    }

    // let modalContent

    // if (modalVisible) {
    //     modalContent = <Modal onClose={hideModalHandler}>
    //         <NewPost
    //             onBodyChange={bodyChangeHandler}
    //             onAuthorChange={authorChangeHandler}
    //         />
    //     </Modal>
    // }

    return (
        < >
            {props.modalVisibility && (
                <Modal onClose={props.modalNotVisible}>
                    <NewPost
                        onCancel={props.modalNotVisible} onAddPost={addPostHandler}
                    />
                </Modal>
            )}
            <ul className={styles.posts}>
                <Post author="Naufal NR" body="Keknya adekny lagi nyanyi ato apalah tadi" />
            </ul>
        </>
    )
}