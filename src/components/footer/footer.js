import React from 'react'
import { Link } from 'gatsby-plugin-react-i18next'
import * as ui from './ui'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const year = new Date().getFullYear()
  const { t } = useTranslation()

  return (
    <ui.Footer>
      <ui.BackToTop>
        <a href="#" className="hover:text-white">
          &uarr; {t('footer.top')} &uarr;
        </a>
      </ui.BackToTop>
      <nav>
        <ul className="mb-8">
          <ui.ListItem>
            <a href="mailto:hello@marcokuehbauch.com">
              <ui.Svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <title>marcokuehbauch@gmail.com</title>
                <path
                  fill="#fff"
                  d="M420.02455 354.77865l-99.60115-98.53796 99.59726-98.53797v197.07593zm-311.06513 18.71317l99.78039-98.44549 4.26255 4.03225c23.56094 22.20628 61.0005 22.20628 83.55619 0l4.29373-4.21326 100.24015 98.6265H108.95942zm-17.89961-215.7891l99.44921 98.53797-99.62844 98.53796.17923-197.07593zm309.84949-18.80563L278.3862 259.91094c-12.44868 12.39715-34.73163 12.12371-47.54657-.48141L109.14255 138.89709H400.9093zM64 112v288h384V112H64z"
                />
              </ui.Svg>
            </a>
          </ui.ListItem>
          <ui.ListItem>
            <a
              href="https://twitter.com/Mkuehb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <title>@Mkuehb on Twitter</title>
                <path
                  fill="#fff"
                  d="M492.25513 109.45554c-17.3837 7.71137-36.06909 12.9208-55.67589 15.26445 20.0108-11.99704 35.3839-30.99434 42.6228-53.63232-18.7327 11.11108-39.4783 19.17684-61.5611 23.52394C399.95964 75.77025 374.76533 64 346.88243 64c-53.5354 0-96.94214 43.40248-96.94214 96.93794 0 7.59797.85714 14.99749 2.51021 22.09224-80.56685-4.04233-151.99913-42.63701-199.810355-101.2874-8.34549 14.31707-13.12595 30.97071-13.12595 48.73712 0 33.63331 17.1137 63.30462 43.12683 80.68829-15.891-.50323-30.83959-4.8645-43.9085-12.12463-.009.404-.009.808-.009 1.21908 0 46.96827 33.4162 86.14696 77.762265 95.05546-8.13333 2.2149-16.697575 3.4009-25.538725 3.4009-6.24683 0-12.31954-.6091-18.23962-1.7398 12.33607 38.5115 48.137025 66.5411 90.557625 67.32-33.1771 26.0028-74.975875 41.5006-120.395075 41.5006-7.82503 0-15.54208-.4604-23.12533-1.3556C62.645325 431.9485 113.60183 448 168.34645 448c178.30949 0 275.81908-147.7158 275.81908-275.82103 0-4.20299-.097-8.38234-.2835-12.54044 18.943-13.66973 35.3769-30.74154 48.3733-50.183"
                />
              </svg>
            </a>
          </ui.ListItem>

          <ui.ListItem>
            <a
              href="https://github.com/mkuehb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 1024 1024"
              >
                <title>Marco Kuehbauch on GitHub</title>
                <path
                  fill="#fff"
                  d="M512,0C229.25,0,0,229.25,0,512c0,226.25,146.688,418.125,350.156,485.812c25.594,4.688,34.938-11.125,34.938-24.625
                c0-12.188-0.47-52.562-0.72-95.312C242,908.812,211.906,817.5,211.906,817.5c-23.312-59.125-56.844-74.875-56.844-74.875
                c-46.531-31.75,3.529-31.125,3.529-31.125c51.406,3.562,78.471,52.75,78.471,52.75c45.688,78.25,119.875,55.625,149,42.5
                c4.654-33,17.904-55.625,32.5-68.375C304.906,725.438,185.344,681.5,185.344,485.312c0-55.938,19.969-101.562,52.655-137.406
                c-5.219-13-22.844-65.094,5.063-135.562c0,0,42.938-13.75,140.812,52.5c40.813-11.406,84.595-17.031,128.126-17.219
                c43.5,0.188,87.312,5.875,128.188,17.28c97.688-66.312,140.688-52.5,140.688-52.5c28,70.531,10.375,122.563,5.125,135.5
                c32.813,35.845,52.625,81.47,52.625,137.406c0,196.688-119.75,240-233.812,252.688c18.438,15.875,34.75,47,34.75,94.75
                c0,68.438-0.688,123.625-0.688,140.5c0,13.625,9.313,29.562,35.25,24.562C877.438,930,1024,738.125,1024,512
                C1024,229.25,794.75,0,512,0z"
                />
              </svg>
            </a>
          </ui.ListItem>
          <ui.ListItem>
            <a
              href="https://www.linkedin.com/in/marco-k%C3%BChbauch/"
              rel="noopener noreferrer"
              target="_blank"
              title="Link to linkedin profile of Marco Kuehbauch"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
            </a>
          </ui.ListItem>
        </ul>
      </nav>
      <Link
        className="mb-6 inline-block uppercase transition-all p-1 hover:bg-white"
        to="/today-I-learned"
      >
        &rarr; Today I learned
      </Link>
      <p>
        {t('footer.hosting')}
        <ui.Link
          href="https://www.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          Netlify.
        </ui.Link>
      </p>
      <p>
        {t('footer.code')}
        <ui.Link
          href="https://github.com/mkuehb/marcokuehbauch.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </ui.Link>
        .
      </p>
      <p>
        © {year} Marco K&uuml;hbauch. Made in Germany with
        <ui.Heart viewBox="0 0 32 29.6">
          <path
            d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
        c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
          />
        </ui.Heart>
        <ui.LinkStyles>
          <Link to="/legal-notice">Legal notice</Link>
        </ui.LinkStyles>
      </p>
    </ui.Footer>
  )
}

export default Footer
