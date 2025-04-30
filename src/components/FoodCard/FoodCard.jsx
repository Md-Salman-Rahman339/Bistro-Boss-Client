import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
 
 const FoodCard = ({item}) => {

    const {name, image, price, recipe} = item;
    const {user}=useAuth();
    const navigate=useNavigate();
    const handleAddToCart = food => {
        if (user && user.email) {
            const cartItem = {
                menuId: food._id,
                name: food.name,
                image: food.image,
                price: food.price,
                email: user.email
            };
    
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Food added to the cart',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.error('Error adding to cart:', error);
            });
        } else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login');
                }
            });
        }
    };
    
 
    
     return (
         <div className="card w-96 bg-base-100 shadow-xl">
             <figure><img src={image} alt="Shoes" /></figure>
             <div className="card-body">
                
                 <p>${price}</p>
                 <div className='card-body flex flex-col items-center'>
                 <h2 className="card-title">{name}</h2>
                 <p>{recipe}</p>
             
                 <div className="card-actions justify-end">
                 <button onClick={()=>handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
                 </div>
                 </div>
             </div>
         </div>
     );
 };
 
 export default FoodCard;