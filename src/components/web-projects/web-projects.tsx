import { useI18next } from 'gatsby-plugin-react-i18next'
import * as React from 'react'

// @ts-ignore
import AndersontourWebsite from '../../images/andersontour-website.webp'
// @ts-ignore
import DiedaWebsite from '../../images/dieda-website.webp'
// @ts-ignore
import AerosolallianceWebsite from '../../images/aerosolalliance-website.webp'
// @ts-ignore
import LauraheineWebsite from '../../images/lauraheine-website.webp'

const projects = [
  {
    title: 'Dieda',
    description: 'Website Relaunch, technische Umsetzung, CMS Integration',
    partners: [
      { partnerName: 'Werk8', partnerLink: 'https://www.werk8.design/' },
    ],
    tools:
      'React, Typescript, Next.js, TailwindCSS, Vercel, Algolia, Prismic, FormSpree',
    linkLabel: 'dieda.de',
    link: 'https://www.dieda.de',
    image: DiedaWebsite,
    imageAlt: 'screenshot of dieda website',
  },
  {
    title: 'Andersontour',
    description: 'Technische Umsetzung und Integration in CMS',
    tools: 'React, Typescript, Next.js, TailwindCSS, Vercel, Prismic',
    linkLabel: 'andersontour.de',
    link: 'https://www.andersontour.de',
    image: AndersontourWebsite,
    imageAlt: 'screenshot of andersontour website',
  },
  {
    title: 'Aerosol Alliance',
    description: 'Technische Umsetzung',
    partners: [
      {
        partnerName: 'Studio Vierkant',
        partnerLink: 'https://studiovierkant.de/',
      },
    ],
    tools: 'React, Typescript, Next.js, TailwindCSS, Firebase, Vercel, Prismic',
    linkLabel: 'aerosolalliance.com',
    link: 'https://aerosolalliance.com',
    image: AerosolallianceWebsite,
    imageAlt: 'screenshot of aerosol alliance website',
  },
  {
    title: 'finding the little things illustrations',
    description: 'Technische Umsetzung',
    tools: 'React, Typescript, Gatsby, TailwindCSS, Netlify, Prismic',
    linkLabel: 'lauraheine.com',
    link: 'https://lauraheine.com',
    image: LauraheineWebsite,
    imageAlt: 'screenshot of findingthelittlethings illustrations website',
  },
]

export const WebProjects: React.FC = () => {
  const { t } = useI18next()

  return (
    <>
      <section className="w-full mb-32 bg-slate-50 p-5 md:p-20">
        <section className="max-w-5xl mx-auto">
          <h2 className="text-center">{t('web-projects.headline')}</h2>
          <p className="mb-10 text-center mx-auto max-w-2xl">
            {t('web-projects.text')}
          </p>
          <section className="grid md:grid-cols-1 gap-y-16">
            {projects.map((project) => (
              <React.Fragment key={project.title}>
                <section className="grid md:grid-cols-2 gap-y-8 gap-x-12 md:gap-y-16">
                  <img
                    alt={project.imageAlt}
                    src={project.image}
                    className="md:mb-10 shadow-custom rounded-lg transition-all hover:-translate-y-1 hover:shadow-customDark"
                    placeholder="blurred"
                  />

                  <article className="flex flex-col justify-center">
                    <h3 className="text-primaryColorOne">{project.title}</h3>
                    {project?.partners && project.partners.length > 0 ? (
                      <p>
                        <span className="mr-2">{t('home.cooperation')}</span>
                        {project.partners?.map((partner) => (
                          <a
                            key={partner.partnerName}
                            href={partner.partnerLink}
                            target="_blank"
                            rel="
                noopener noreferrer"
                          >
                            {partner.partnerName}
                          </a>
                        ))}
                      </p>
                    ) : null}
                    <p>Tools: {project.tools}</p>
                    <p className="flex gap-2">
                      <span>Link:</span>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.linkLabel} &#8599;
                      </a>
                    </p>
                  </article>
                </section>
              </React.Fragment>
            ))}
          </section>
        </section>
      </section>
    </>
  )
}
