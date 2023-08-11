import React from 'react'
import Card from '../../elements/Card'
import Input from '@elements/Input'
import Button from '@elements/Button'
import myImg from '@assets/myImg.jpg'
// import Input from "@elements/Input";
import useAuthentication from "../../hooks/useAuthentication";

export default function ProfileCard() {
  const { resetIsAuthenticatedAndUserContext, userContext, isAuthenticated } = useAuthentication();

    return (
        <Card 
            cardClass="bg-gray-200 dark:bg-gray-800 rounded-md"
            bodyClass="p-2">
                <div className=" mb-2">
                    <img src={myImg} className="w-full max-h-80 rounded-md" />
                </div>
                <div className="">
                <Input label="Your Name"  value={ userContext?.name} />
                </div>
                <div className="">
                <Input label="Your Email" value={ userContext?.email} />
                </div>
                <div className="">
                <Button
                    title={"Update Profile"}
                    btnClass="!w-full bg-green-500 p-2 text-white font-semibold text-md !my-2"
                />
                </div>
        </Card>
    )
}
