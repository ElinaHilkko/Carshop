import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import AddCar from './AddCar';
import EditCar from './EditCar';

function Carlist() {
    useEffect( () => {
        fetchCars();
    }, [])
    
    const[cars, setCars] = useState([]);

    const fetchCars = () => {
        fetch(process.env.REACT_APP_API_URL)
            .then(response => response.json())
            .then(data => setCars(data._embedded.cars)); 
    }  
    const addCar = (car) => {
        fetch(process.env.REACT_APP_API_URL, {
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(car)
        })
            .then(response => {
                if(response.ok) {
                    fetchCars();
                } else {
                    alert('Something went wrong with adding car')
                }
            })
            .catch(err => console.log(err))
    }
    const editCar = (editCar, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(editCar)
        })
        .then(response => {
            if(response.ok) {
                fetchCars();
            } else {
                alert('Somethin went wrong with editing car')
            }
        })
        .catch(err => console.error(err))
    }
    const deleteCar = (link) => {
        console.log(link)

        fetch(link, { method: 'DELETE'})
            .then(response => {
                if(response.ok) {
                    fetchCars();
            }
        })
    }
    const columns = [
        {field: 'brand', sortable: true, filter: true},
        {field: 'model', sortable: true, filter: true},
        {field: 'color', sortable: true, filter: true},
        {field: 'fuel', sortable: true, filter: true},
        {field: 'year', sortable: true, filter: true},
        {field: 'price', sortable: true, filter: true},
        {
            headerName: '',
            width: 100,
            field: '_links.self.href',
            cellRenderer: params =>
                <EditCar editCar={editCar} params={params}/>
        },
        {
            headerName: '', 
            width: 100, 
            field: '_links.self.href', 
            cellRenderer: params =>
                <IconButton onClick={() => deleteCar(params.value)}>
                    <DeleteIcon/>
                </IconButton>
        }
    ]

    return (
        <>
            <AddCar addCar={addCar} />
            <div className="ag-theme-material" style={{height: 600, width: '90'}}>
                <AgGridReact
                    rowData={cars}
                    paginationPageSize={10}
                    pagination={true}
                    columnDefs={columns}>
                </AgGridReact>
            </div>
        </>
    )
}
export default Carlist;