import { createRef, useState } from "react";
import { Button, Form, Table } from 'react-bootstrap';
import axios from "axios";
const AddNewProduct =()=>{
    let initialValue = [];
    const [products, setProducts] = useState(initialValue);
    const formData = createRef();
    

    //add product handler method
    const addproductHandler =(event)=>{
        event.preventDefault();
        // console.log(event.target.product_name.value);
        // console.log(formData);
        //creating an object
        const newProduct = {
            category: formData.current.category.value,
           productid: Number (formData.current.productid.value),
               product_name: formData.current.product_name.value,
               price: formData.current.price.value,
               quantity: Number (formData.current.quantity.value),
               
        }

        // console.log(newProduct);
        setProducts([...products,newProduct]);
        // console.log(products);
       }
       const incrementQuantity =(event) =>{
        //    console.log(event.target.value)
           const indexOfArray = event.target.value;
           products[indexOfArray].quantity = products[indexOfArray].quantity + 1;
           setProducts([...products])

    }
    const decrementQuantity =(event) =>{
        const indexOfArray = event.target.value;
        products[indexOfArray].quantity = products[indexOfArray].quantity - 1;
        setProducts([...products]);

    }
    const submit = () => {
     axios.post("http://localhost:3000/submit", products)
     .then(res => console.log(res))
    }
    return (
        <div >
            
            <Form onSubmit={addproductHandler} ref={formData} >
            <Form.Group controlId="Category" >
                    <Form.Label >Category:  </Form.Label>
                    <Form.Control type="text" placeholder="Enter category" name="category" />

                </Form.Group><br />
                <Form.Group controlId="ProductId" >
                    <Form.Label >ProductId:  </Form.Label>
                    <Form.Control type="number" placeholder="Enter productid" name="productid" />

                </Form.Group><br />
                <Form.Group controlId="ProductName" >
                    <Form.Label >ProductName:  </Form.Label>
                    <Form.Control type="text" placeholder="Enter product name" name="product_name" />

                </Form.Group><br />
                <Form.Group controlId="price">
                    <Form.Label>Price: </Form.Label>
                    <Form.Control type="number"  placeholder="price in Euro" name="price" />

                </Form.Group><br />
                <Form.Group controlId="Quantity">
                    <Form.Label>Quantity: </Form.Label>
                    <Form.Control type="number" placeholder="How many:qty" name="quantity" />

                </Form.Group><br />

        <Button variant="primary" type="submit" onClick={submit}>Submit</Button>
            </Form>
            {/* <Table striped bordered hover variant="dark"> */}
            {/* <Table cellSpacing="2" align="center" cellPadding="8" border="0"> */}
            <Table style={{width:"50%", margin:"2rem auto"}} striped bordered hover size="sm">
                <thead>
                    <tr>
                        
                        <th>Index</th>
                        <th>Category</th>
                        <th>ProductId</th>
                        <th>Product Name</th>
                        <th>price</th>
                        <th>Quantity</th>
                        
                        <th>options</th>
                    </tr>
                    </thead>
                <tbody>
                    {products.map((item, index)=>{
                        return(
                         <tr key={index} >
                             <td>{index}</td>
                             <td>{item.category}</td>
                             <td>{item.productid}</td>
                             <td>{item.product_name}</td>
                             <td>{item.price}</td>
                             <td>{item.quantity}</td>
                             
                             <td>
                                 <Button variant="success" onClick={event=>incrementQuantity(event)} value={index}>+</Button>
                                 <Button variant="fail" onClick={event=>decrementQuantity(event)} value={index}>-</Button>
                             </td>

                         </tr>)
                        })}
                         </tbody>
            </Table>

        </div>
    );
};
export default AddNewProduct;