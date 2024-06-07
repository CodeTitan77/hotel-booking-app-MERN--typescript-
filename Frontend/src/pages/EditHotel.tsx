import { useParams } from "react-router-dom";
import { fetchMyHotelsById } from './../api-client';
import { useQuery } from "react-query";
import * as apiClient from "../api-client"
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm";


const EditHotel = () => {
    const {hotelId}= useParams();
    const {data: hotel} = useQuery("fetchMyHotelById",()=>
    apiClient.fetchMyHotelsById(hotelId||''),{
        enabled: !!hotelId, // doble exclamation mark here query only gonna run if hotel id is present

    }
);
  return (

      <ManageHotelForm hotel ={hotel}/>
   
  )
};

export default EditHotel;
