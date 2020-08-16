import React from 'react'
import Layout from "./components/Layout"
import styles from "./components/blog.module.css"
const blog = () => 
    (
        <Layout>
            <div className={styles.page}>
            <h1>Une page de mon Blog</h1>

            <p className={styles.text}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p> 
        </div>
        </Layout>
    )


export default blog;
