import styles from "@pages/products/products-catalog/ProductsCatalog.module.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import $api from "@utils/interceptors.ts";
import {useEffect, useState} from "react";

interface IFilterCategory {
  category_id: number,
  category_name: string,
  product_count: string
}

export default function Filter() {
  const [filterCategories, setFilterCategories] = useState<IFilterCategory[]>([]);

  const getFilterCategories = () => {
    $api.get('/api/category')
      .then(response => setFilterCategories(response.data))
      .catch(error => console.error(error));
  }

  useEffect(() => {
    getFilterCategories();
  }, []);

  return (
    <div className={styles.filterBlocks}>
      <div className={styles.productsCatalogFilter}>
        <Accordion className={styles.accordionFilter}>
          <AccordionSummary
            className={styles.accordionFilterBlock}
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Category
          </AccordionSummary>
          {filterCategories.map((category, index) =>
            <div key={index} className={styles.filterCategoryText}>
              <div>
                <input type='checkbox'/>
                <span>{category.category_name}</span>
              </div>
              <span>{category.product_count}</span>
            </div>)}
        </Accordion>
        <Accordion className={styles.accordionFilter}>
          <AccordionSummary
            className={styles.accordionFilterBlock}
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Preference
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.accordionFilter}>
          <AccordionSummary
            className={styles.accordionFilterBlock}
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Ingredients
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.accordionFilter}>
          <AccordionSummary
            className={styles.accordionFilterBlock}
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Good for
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.filterBlockInfo}>
        <h3>Track your products and build your routine with SkinSort.</h3>
        <button>Get Started With Free!</button>
      </div>
    </div>
  )
}