import { baseUrl } from "./baseurl";
import { commonRequest } from "./commonRequest";

// /add
       export const addVideo=async(body)=>{
   return await commonRequest('POST',`${baseUrl}/Videos`,body)
}

// get allvideo
 export const getAllVideos=async()=>{
    return await commonRequest('GET',`${baseUrl}/Videos`,{})
}

// delete 
export const deleteVideo=async(id)=>{
    return await commonRequest('DELETE',`${baseUrl}/Videos/${id}`,{})
}

// add category

export const addCategory=async(body)=>{
    return await commonRequest('POST',`${baseUrl}/Categories`,body)
 }

//  get all categories
export const getAllCat=async()=>{
    return await commonRequest('GET',`${baseUrl}/Categories`,{})
 }

//  delete category

export const deleteCat=async(id)=>{
    return await commonRequest('DELETE',`${baseUrl}/Categories/${id}`,{})
}
// add history

export const addHistory=async(body)=>{
    return await commonRequest('POST',`${baseUrl}/histories`,body)
}
// get all history

export const getAllHistory=async(body)=>{
    return await commonRequest('GET',`${baseUrl}/histories`,{})
}
// delete history

export const deleteHistory=async(id)=>{
    return await commonRequest('DELETE',`${baseUrl}/histories/${id}`,{})
}

// darg and drop


// acces single video
export const getVideo=async(id)=>{
    return await commonRequest('GET',`${baseUrl}/Videos/${id}`,{})
}

// update category
export const updateCategory=async(id,body)=>{
    return await commonRequest('PUT',`${baseUrl}/Categories/${id}`,body)
}