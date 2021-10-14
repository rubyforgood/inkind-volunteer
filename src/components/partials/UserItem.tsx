import { Avatar } from "./Avatar"

interface UserItemProps {
  header: string,
  initials: string,
  subHeader: string,
}

export const UserItem = ({ header, initials, subHeader }: UserItemProps): JSX.Element => (
  <div>
    <div className="flex flex-row w-full inline-block text-left my-1 p-4 leading-tight bg-white rounded-md">
      <Avatar initials={initials} />
      <div className="inline-block flex flex-col">
        <p className="block font-semibold">{header}</p>
        <p className="block text-xs">{subHeader}</p>
      </div>
    </div>
  </div>
)