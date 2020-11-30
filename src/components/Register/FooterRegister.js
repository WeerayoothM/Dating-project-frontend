import { Button } from 'antd'
import React from 'react'

function FooterRegister(props) {
    return (
        <>
            <div style={{ margin: '0 auto', marginBottom: '30px' }} >
                {(props.current === 1 || props.current === 2) && (
                    <Button style={{ margin: '0 8px' }} onClick={props.prev}>
                        Previous
                    </Button>
                )}
                {props.current === 0 && (
                    <Button type="primary" onClick={props.next}>
                        Next
                    </Button>
                )}
                {props.current === 1 && (
                    <Button type="primary" htmlType='submit'>
                        Next
                    </Button>
                )}
                {props.current === 2 && (
                    <Button type="primary" onClick={props.onSubmit}>
                        Done
                    </Button>
                )}
            </div>
        </>
    )
}

export default FooterRegister
