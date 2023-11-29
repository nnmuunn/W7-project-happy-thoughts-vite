import { HappyMessages } from "./components/HappyMessages/HappyMessages";
import { TextField } from "./components/TextField/TextField";


export const App = () => {
  return <>
<header>
  <h1>PROJECT HAPPY THOUGHTS</h1>
  <h2>Technigo Education Team</h2>
</header>

<div>
  <TextField />
</div>

<div>
  <HappyMessages />
</div>
  </>;
};
