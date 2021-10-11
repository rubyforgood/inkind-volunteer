import React from "react"

export declare type AvatarPros = {
  name: string;
};

export const Avatar = ({name}: AvatarPros): JSX.Element => {
  const [f, l]: string[] = name.split(' ')
  const initials = [f.charAt(0).toUpperCase(), (l || '').charAt(0).toUpperCase()].join('')

  return (
    <div className="border-primary rounded-full bg-purple-light text-success w-10 h-10 mr-3 inline-flex items-center align-middle justify-center font-nunito text-md">
      {initials}
    </div>
  )
}
