import "./About.css";

function About() {
  return (
    <div className="component about">
      <h2 className="component-title">О приложении</h2>
      <p>Это мультитул для удобного ведения повседневных рутинных расчетов.</p>
      <p>В дальнейшем планируется добавление дополнительных инструментов.</p>
      <p>
        Для конструктивной критики, предложений по добавлению и улучшению
        функционала можно написать в{" "}
        <a
          target="_blank"
          rel="nofollow noopener noreferrer"
          href="https://t.me/Vadicus"
        >
          телеграм
        </a>{" "}
        или на электронную почту{" "}
        <a href="mailto:vadicus.rad@yandex.ru">vadicus.rad@yandex.ru</a>
      </p>
    </div>
  );
}

export default About;
