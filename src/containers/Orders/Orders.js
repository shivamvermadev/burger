import React from 'react';
import Order from '../../components/Order/Order';
import axios from 'axios';
import { connect } from 'react-redux';

class Orders extends React.Component {
    state = {
        loading: true,
        orders: []
    }

    componentDidMount() {
        axios.get('https://myburger-b6fec-default-rtdb.firebaseio.com/orders.json').then((res) => {
            console.log(res.data);
            const fetchedOrders = [];

            for (let key in res.data) {
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                });
            }

            this.setState({ loading: false, orders: fetchedOrders });
        })
            .catch((err) => {
                this.setState({ loading: false });
                alert("Some error ocuured!")
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}
                    ></Order>
                ))}
            </div>
        );
    }
}


export default Orders;