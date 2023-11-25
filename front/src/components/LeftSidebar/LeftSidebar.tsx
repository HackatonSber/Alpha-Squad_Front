import {
   Badge,
   Cell,
   H1,
   TextBox,
} from "@salutejs/plasma-ui";
import styles from "./LeftSidebar.module.css";
import { filters } from "../../constants/intex";
import { useEffect, useState } from "react";

const LeftSidebar = () => {
   const [applicationsList, setApplicationsList] = useState(
      [1]
   );

   useEffect(() => {
      setApplicationsList([]);
   }, []);
   return (
      <section className={styles}>
         <div>
            <H1>Заявки</H1>
         </div>
         <div className={styles.filters}>
            {filters.map((filter) => {
               return (
                  <Badge
                     text={filter.label}
                     size='l'
                     view='secondary'
                  />
               );
            })}
         </div>
         <div className={styles.applications_list}>
            <div className={styles.applications}>
               {applicationsList.map((app) => {
                  return (
                     <div className={styles.application}>
                        {/* <Cell
                           content={
                              <TextBox
                                 title='Заголовок'
                                 subTitle='Подзаголовок'
                              />
                           }
                        /> */}
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default LeftSidebar;
