import React, { useState } from 'react'
import {
    Select, Tag, Form,
    Input,
    Tooltip,
    Row,
    Col,
    Checkbox,
    Button,
    DatePicker,
    Upload,
    Avatar,
    Image,
    Divider,
} from 'antd';

function SelectTaste(props) {

    const options = [{ label: 'male', value: 'gold' }, { label: 'female', value: 'cyan' }, { label: 'binary', value: 'green' }, { label: 'other', value: 'lime' }]
    const colorToGender = {
        gold: 'male',
        cyan: 'female',
        green: 'binary',
        lime: 'other',
    }
    const onChange = (colors) => {
        console.log(colors)
        props.setTasteValue(colors.map(color => colorToGender[color]))
    }

    return (
        <div style={{ width: "100%" }}>

            <h1>Select your Taste</h1>
            <Select
                mode="multiple"
                size="large"
                showArrow
                defaultValue={['gold', 'cyan']}
                style={{ width: '50%' }}
                options={options}
                tagRender={tagRender}
                onChange={onChange}
            />

            {props.current < 2 && (
                <Button type="primary" onClick={props.next}>
                    Next
                </Button>
            )}
        </div>
    )
}

export default SelectTaste

function tagRender(props) {
    const { label, value, closable, onClose } = props;

    return (
        <Tag color={value} closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
            {label}
        </Tag>
    );
}