interface HeadingProps {
  title: string,
  description: string
}

const Heading: React.FC<HeadingProps> = ({
  title,
  description
}) => {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <p className="mt-2 text-sm text-mutated-foreground">{description}</p>
    </div>
  )
}

export default Heading