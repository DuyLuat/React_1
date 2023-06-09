import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../services/UserService';

function TableUsers() {
    const [listUsers, setListUsers] = useState([]);
    useEffect(() => {
        //call API
        getUser();
    }, [])

    const getUser = async () => {
        let res = await fetchAllUser();
        if (res && res.data) {
            setListUsers(res.data);
        }
        console.log('>>>>listUsers: ', res.data)
    }


    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        listUsers.map((item, index) => {
                            return (<tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>

                            </tr>)
                        })

                    }



                </tbody>
            </Table>
        </Container >
    );
}

export default TableUsers;