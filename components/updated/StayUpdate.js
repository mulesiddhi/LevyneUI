import React from 'react'
import styles from '../../styles/StayUpdate.module.scss'

const StayUpdate = () => {
    return (
      <div className={`container  p-5 ${styles.ucontainer}`}>
                        <div className='box'>
                <h1 className='m-3 mb-10'>Stay Updated With Us</h1>
                <form className='mb-10 m-3'>
                    <input className={styles.uinput} type='email' placeholder='Enter Your Best Email Id..'>
                    </input>
                </form>
            </div>
            
        </div>
    )
}

export default StayUpdate
