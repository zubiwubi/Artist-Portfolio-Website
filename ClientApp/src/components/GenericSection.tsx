type SectionProperties =
{
  name: string
  description: string
  className: string
}


export function GenericSection(props: SectionProperties)  {
  return <>
  <div className={props.className}>
    <h2> {props.name} </h2>
    <p> {props.description} </p>
  </div>
  </>
}
