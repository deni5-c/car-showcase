"use client"

import { CustomButtonProps } from "@/types"
import Image from "next/image"

const CustomButton = ({ title, btnType, containerStyles, handleClick }: CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={btnType || "button"}
        className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1`}>{title}</span>
    </button>
  )
}

export default CustomButton