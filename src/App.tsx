import { Container } from "@salutejs/plasma-ui/components/Grid";
import { Button } from "@salutejs/plasma-ui";

import styles from "./App.module.css";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";

function App() {
   return (
      <main className={styles.main}>
         <LeftSidebar />
         <Container>
            <Button>Hello, Plasma!</Button>
         </Container>
      </main>
   );
}

export default App;
