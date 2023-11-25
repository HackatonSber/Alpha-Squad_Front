import { H1 } from "@salutejs/plasma-ui";
import styles from "./LeftSidebar.module.css";

const LeftSidebar = () => {
   return (
      <section className={styles}>
         <div>
            <H1>Заявки</H1>
         </div>
         <div>filters</div>
         <div>applications</div>
      </section>
   );
};

export default LeftSidebar;
