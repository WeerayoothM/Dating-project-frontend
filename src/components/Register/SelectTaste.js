import React from 'react'
import {
    Row,
    Select,
    Tag
} from 'antd';
import FooterRegister from './FooterRegister';

function SelectTaste(props) {

    const options = [{ label: 'male', value: 'male' }, { label: 'female', value: 'female' }, { label: 'binary', value: 'binary' }]

    const onChange = (value) => {
        console.log(value)
        props.setTasteValue(value)
    }

    return (
        <>
            <div style={{ width: "100%", height: '400px', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <h1 className="taste-header">Select your Taste</h1>
                <Select
                    mode="multiple"
                    size="large"
                    showArrow
                    style={{ width: '50%', cursor: 'pointer' }}
                    placeholder='select your taste'
                    options={options}
                    tagRender={tagRender}
                    onChange={onChange}
                />
            </div>
            <div style={{ padding: '30px', display: 'flex', justifContent: "center" }}>
                <FooterRegister current={props.current} next={props.next} prev={props.prev} />
            </div>
        </>
    )
}

export default SelectTaste

function tagRender(props) {
    const { value, closable, onClose } = props;
    const genderToColor = {
        'male': 'gold',
        'female': 'cyan',
        'binary': 'green',
        lime: 'other',
    }

    return (
        <Tag color={genderToColor[value]} closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
            {value}
        </Tag>

    );
}