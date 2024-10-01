import { useParams } from "react-router-dom";
import * as apiClient from "./../api-client";
import { useQuery } from "react-query";


const Detail = () => {
    const {hotelId}= useParams();
    const {data:hotel}= useQuery("fetchHotelByid",()=>apiClient.fetchHotelById(hotelId as string),{
        enabled : !!hotelId,
    })
  return (
    <div>
      
    </div>
  )
}

export default Detail
