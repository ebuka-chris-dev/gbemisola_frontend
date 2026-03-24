import axios from "axios";
import { API_URI } from "../../store/constant";


export const checkSlotAvailability = (payload) => 
  axios.get(`${API_URI}/sokoto/registrations/slot/checking`, { params: payload });

export const submitRegistration = (payload) => 
  axios.post(`${API_URI}/sokoto/registrations`, payload);