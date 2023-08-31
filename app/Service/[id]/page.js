import styles from '../service.module.css';

import React, {Suspense} from 'react';

export default async function page({params}) {
    const id = params.id;
    // i write it id because i named file [id]
    console.log(`${id}`);

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    const loadingJsx =(<div><h3>Loading ...</h3></div>)

    return (
        <div className={styles.layoutPage}>

        <h1>
            User Detelies
        </h1>

        <Suspense fallback={loadingJsx}>
            <div className={styles.card}>
                <span>{data.id}  -</span>
                <h4> {data.name}</h4>
                <p>{data.email}</p>
            </div>
        </Suspense>

    </div>
)
}
