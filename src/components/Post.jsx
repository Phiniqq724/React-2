// const names = ['Batu', 'Kertas', 'Gunting']
import styles from './Post.module.css'

const Post = (props) => {

    // const randomNumber = (max, min) => {
    //     let chosenName;
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     return (chosenName = Math.floor(Math.random(names) * (max - min + 1)) + min
    //     )
    // }
    // let paan
    // let apalah = randomNumber(100, 1)
    // if (apalah < 30) {
    //     paan = 0
    // } else if (apalah < 60) {
    //     paan = 1
    // } else if (apalah < 100) {
    //     paan = 2
    // }
    // props.author
    // props.body

    return (
        // < >
        //     <p>
        //         Bot berkata : {names[paan]}
        //     </p>
        //     <p>
        //         React JS keren
        //     </p>
        // </>
        <li className={styles.post}>
            <p className={styles.author}>
                {props.author}
            </p>
            <p className={styles.text}>
                {props.body}
            </p>
        </li>
    )
}

export default Post;