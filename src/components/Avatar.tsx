import React from "react"

export declare type AvatarPros = {
  initials: string;
  size?: number;
};

export const Avatar = ({
  initials,
  size = 10,
}: AvatarPros): JSX.Element => {
  const sizeClasses = `w-${size} h-${size}`

  return (
    <div className={`${sizeClasses} border-primary rounded-full bg-purple-light text-success mr-3 inline-flex items-center align-middle justify-center font-nunito text-md`}>
      {initials}
    </div>
  )
}
