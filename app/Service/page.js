import Link from 'next/link';
import styles from './service.module.css';

import React from 'react';

export default async function ServicePage() {
    const Api = 'https://jsonplaceholder.typicode.com/users';
    const res = await fetch(Api);
    const data = await res.json();

    return (
    <>
        <div className={styles.hr}>
            <h1>ServicePage 3</h1>
            <hr />
            <hr />
            <hr />
            <div className={styles.container}>
                {data.map(el =>{
                    return(
                        <div className={styles.card}>
                            <span>{el.id}  -</span>
                            <Link href={`/Service/${el.id}`}>
                            <h4> {el.name}</h4>
                            </Link>
                            <p>{el.email}</p>
                            <p>{el.address.city}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
)
}
