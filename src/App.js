import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase  } from 'react-icons/go';

function App() {
  return (<div>
    <div>
      <Button primary rounded>
        <GoBell />
        Primary
      </Button>
    </div>
    <div>
      <Button secondary outline>Secondary</Button>
    </div>
    <div>
      <Button success rounded>
        <GoCloudDownload />
        Success
      </Button>
    </div>
    <div>
      <Button warning outline>Warning</Button>
    </div>
    <div>
      <Button danger rounded>
        <GoDatabase />
        Danger
      </Button>
    </div>
  </div>)
}

 export default App;