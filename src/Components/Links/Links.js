import "./Links.css";

function Links() {
  return (
    <div className="component links">
      <h2 className="component-title">Полезные ссылки</h2>
      <div className="links-list">
        <ul>
          <li>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href="https://mosgorzdrav.ru/ru-RU/science/default/download/629.html"
            >
              Клинические рекомендации Дифференцированный рак щитовидной
              железы(скачивание pdf)
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4739132/pdf/thy.2015.0020.pdf"
            >
              2015 American Thyroid Association Management Guidelines for Adult
              Patients with Thyroid Nodules and Differentiated Thyroid Cancer
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href="https://www.endocrinepractice.org/action/showPdf?pii=S1530-891X%2820%2942954-4"
            >
              AMERICAN ASSOCIATION OF CLINICAL ENDOCRINOLOGISTS, AMERICAN
              COLLEGE OF ENDOCRINOLOGY, AND ASSOCIAZIONE MEDICI ENDOCRINOLOGI
              MEDICAL GUIDELINES FOR CLINICAL PRACTICE FOR THE DIAGNOSIS AND
              MANAGEMENT OF THYROID NODULES – 2016 UPDATE APPENDIX
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href="https://www.acr.org/Clinical-Resources/Reporting-and-Data-Systems/TI-RADS"
            >
              American College of Radiology(ACR-TIRADS)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Links;
