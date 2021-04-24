import React, { useState, useEffect } from 'react';
import api from "../service/conexao-api"

function ApartamentosService() {

    const [apartamentos, setData] = useState([]);

    useEffect(() => {
        api.get('apartamentos')
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            });

    }, []);

}

export default ApartamentosService;