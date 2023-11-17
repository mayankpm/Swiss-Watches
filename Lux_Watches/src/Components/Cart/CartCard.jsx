import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Cart.css';
import { CartImage, ap_1159, royaloak_minute, royaloak_perpetual, carrera_date, carrera_porsche, carrera, daydate_green, daydate_gold, daydate_blue,
  patek_green, patek_teal, patek_blue
} from '../WatchCollection/images';

export default function CartCard({ watchDetails}) {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    console.log("Details: ",watchDetails,watchDetails.user_id, watchDetails.id)
    const confirmed = window.confirm("Are you sure you want to remove this item from your cart?");

    if (confirmed) {
      fetch(`http://127.0.0.1:8000/auth/cart/item/${watchDetails.id}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
              //   if (!response.ok) {
              //     throw new Error('Network response was not ok');
              // }

              setIsDeleted(true);
                console.log('Item deleted.');
            })
            .catch(error => {
                console.error('Error deleting item:', error);
            });
    }
 };
 

  if (isDeleted) {
    return null;
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: watchDetails.name || 'Watch Title', // Replace 'Watch Title' with a default value
        url: window.location.href
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
    } else {
      console.log('Not supported');
    }
  };

  const getImageByWatchName = (name) => {
    const nameToVariableMap = {
      "Code 11.59 by Audemars Piguet": ap_1159,
      "Royal Oak Minute Repeater Supersonnerie": royaloak_minute,
      "Royal Oak Perpetual Calendar": royaloak_perpetual,
      "Carrera Date": carrera_date,
      "Carrera Chronosprint x Porsche": carrera_porsche,
      "Carrera": carrera,
      "Day-Date 36 Everose Gold Green Dial": daydate_green,
      "Day-Date 36 Gold": daydate_gold,
      "Day-Date 36 White Gold Light Blue Dial": daydate_blue,
      "Patek Philippe Grand Complications 6300G-001": patek_green,
      "Patek Philippe Grand Complications 5531R-001": patek_teal,
      "Patek Philippe Grand Complications 5905R-010": patek_blue,
    };

    const selectedImage = nameToVariableMap[name] || carrera; // Use 'carrera' as a default image if not found
    console.log('Selected image:', selectedImage);
    return selectedImage;
  };

  console.log('Watch Details CartCard.jsx:', watchDetails);

  return (
    <>
      <div className='card1'>
        <CartImage pfp={getImageByWatchName(watchDetails.name)} />
        <div className='watch-details text-xl'>
          <h1>{watchDetails.name || 'Watch Title'}</h1>
          {/* <p>{watchDetails.color || 'Blue'}</p> */}
          <div className='additionals flex justify-start'>
            <label htmlFor='quantity-select'>Quantity:  
              <select id='quantity-select' className='bg-white text-black mr-2'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
              </select>
            </label>
            <button onClick={handleDelete} className='underline ml-2 mr-2'>Delete</button>
            <button onClick={handleShare} className='underline ml-2'>Share</button>
          </div>
        </div>
        <div className='price flex justify-start'>
          <h1>{`$${watchDetails.price || '0'}`}</h1>
        </div>
      </div>
    </>
  );
}
