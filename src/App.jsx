import PostsList from './components/PostsList'
import MainHeader from './components/MainHeader'

import { useState } from 'react'

export default function App() {
    const [modalVisible, setModalVisible] = useState(false)

    function hideModalHandler() {
        setModalVisible(false)
    }

    function showModalHandler() {
        setModalVisible(true)
    }
    return (
        < >
            <MainHeader onCreatePost={showModalHandler} />
            <main>
                <PostsList modalVisibility={modalVisible} modalNotVisible={hideModalHandler} />
            </main>
        </>
    )
}