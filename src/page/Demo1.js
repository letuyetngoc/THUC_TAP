import { Button, Radio } from 'antd'
import React from 'react'
import { useState } from 'react';

export default function Demo1() {
    const [disabled, setDisabled] = useState(true);

    const toggleDisabled = () => {
        setDisabled(!disabled);
    };

    return (
        <div >
            <>
                <Radio defaultChecked={false} disabled={disabled}>
                    Disabled
                </Radio>
                <Radio defaultChecked disabled={disabled}>
                    Disabled
                </Radio>
                <br />
                <Button
                    type="primary"
                    onClick={toggleDisabled}
                    style={{
                        marginTop: 16,
                    }}
                >
                    Toggle disabled
                </Button>
            </>
        </div>

    )
}
