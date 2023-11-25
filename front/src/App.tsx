import { Container } from "@salutejs/plasma-ui/components/Grid";
import { Button, DsplL } from "@salutejs/plasma-ui";

import styles from "./App.module.css";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";

function App() {
   return (
      <main className={styles.main}>
         <LeftSidebar />
         <Container>
            <DsplL bold={false}>DsplL</DsplL>
            <Button>Hello, Plasma!</Button>
         </Container>
      </main>
   );
}

export default App;
