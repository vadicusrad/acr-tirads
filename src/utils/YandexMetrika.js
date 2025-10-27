import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const YandexMetrika = () => {
  const location = useLocation();
  const initialized = useRef(false);

  useEffect(() => {
    // Инициализация метрики при первом рендере
    if (!initialized.current) {
      initialized.current = true;

      // Код инициализации Яндекс.Метрики
      (function (m, e, t, r, i, k, a) {
        m[i] =
          m[i] ||
          function () {
            (m[i].a = m[i].a || []).push(arguments);
          };
        m[i].l = 1 * new Date();
        for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) {
            return;
          }
        }
        k = e.createElement(t);
        a = e.getElementsByTagName(t)[0];
        k.async = 1;
        k.src = r;
        a.parentNode.insertBefore(k, a);
      })(
        window,
        document,
        "script",
        "https://mc.yandex.ru/metrika/tag.js",
        "ym"
      );

      window.ym(104874892, "init", {
        ssr: true,
        webvisor: true,
        clickmap: true,
        ecommerce: "dataLayer",
        accurateTrackBounce: true,
        trackLinks: true,
      });
    }

    // Отслеживание смены страниц в SPA
    if (window.ym && initialized.current) {
      window.ym(
        104874892,
        "hit",
        window.location.pathname + window.location.search
      );
    }
  }, [location.pathname, location.search]);

  // Noscript для случаев без JavaScript
  return (
    <noscript>
      <div>
        <img
          src="https://mc.yandex.ru/watch/104874892"
          style={{ position: "absolute", left: "-9999px" }}
          alt=""
        />
      </div>
    </noscript>
  );
};

export default YandexMetrika;
