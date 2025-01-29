
interface Amenity {
  icon: React.ReactNode
  text: string
}

export const AmenityList = ({ items }: { items: Amenity[] }) => (
  <ul className="space-y-2">
    {items.map((item, index) => (
      <li key={index} className="flex items-center">
        <span className="mr-2">{item.icon}</span>
        {item.text}
      </li>
    ))}
  </ul>
)