import { useParams } from "react-router-dom";

import { useMutation, useQuery } from "react-query";
import * as apiClient from "../api-client"
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm";
import { useAppContext } from "../contexts/AppContext";


const EditHotel = () => {
    const {hotelId}= useParams();
    const {showToast}= useAppContext();
    const {data: hotel} = useQuery("fetchMyHotelById",()=>
    apiClient.fetchMyHotelsById(hotelId||''),{
        enabled: !!hotelId, // doble exclamation mark here query only gonna run if hotel id is present

    }
);
const {mutate,isLoading}= useMutation(apiClient.updateMyHotelById,{
    onSuccess:()=>{
        showToast({message:"hotel Saved",type:"SUCCESS"})
    },
    onError:()=>{
        showToast({message:"Error saving hotel",type:"ERROR"})
    }
    
})
const handleSave = (hotelFormData:FormData)=>{
    mutate(hotelFormData);
}
  return (

      <ManageHotelForm hotel ={hotel} onSave={handleSave} isLoading={isLoading}/>
   
  )
};

export default EditHotel;


