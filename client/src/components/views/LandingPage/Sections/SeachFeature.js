import React, { useState } from 'react'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;



function SeachFeature(props) {

    const [SearchTerm, setSearchTerm] = useState("")
    
    const searchHandler = (e) => {
        setSearchTerm(e.currentTarget.value)
        props.refreshFunction(e.currentTarget.value)
    }
    
    
    return (
        <div>
            <Search placeholder="input search text"
             onChange={searchHandler}
             style={{ width: 200 }}
             value={SearchTerm} />
        </div>
    )
}

export default SeachFeature
