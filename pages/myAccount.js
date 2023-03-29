import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function myAccount() {
  const rout=useRouter()
  useEffect(()=>{
    if(localStorage.getItem("token")){
      return
    }else{

      rout.push("/login")
    }


},[rout.query])
  return (
    <div>
      My Account
    </div>
  )
}

export default myAccount
