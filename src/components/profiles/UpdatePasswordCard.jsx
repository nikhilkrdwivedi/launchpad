import React from 'react'
import Card from '../../elements/Card'
import Input from '@elements/Input'
import Button from '@elements/Button'
export default function UpdatePasswordCard() {
    return (
        <Card title={"Update Password"}
            cardClass="bg-gray-200 dark:bg-gray-800 rounded-md"
            headerClass="p-2 text-gray-600 dark:text-gray-200 font-semibold border-b border-gray-400 dark:border-gray-600"
            bodyClass="p-2">

            <div className="" >
                <Input type="password" label="Current Password" />
            </div>
            <div className="">
                <Input  type="password" label="New Password"  />
            </div><div classNames="">
                <Button
                    title={"Update Password"}
                    btnClass="!w-full bg-green-500 p-2 text-white font-semibold text-md !my-2"
                />
            </div>
        </Card>
    )
}
