import { GenericHeader } from "../../components/GenericHeader";

const name = "you";

function Greeting() {
  return <h1>Hello, {name}!</h1>;
}


export function StartPage() {
    return (<>
        <GenericHeader />
        <Greeting />
    </>
    );
}