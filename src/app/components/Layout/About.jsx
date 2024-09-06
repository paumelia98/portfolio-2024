import Image from 'next/image';
import {useTranslations} from 'next-intl';
export const About = () => {

  const t = useTranslations('About');

  const experiences = [
    {
      company: 'Aprobatus SL',
      job: 'Frontend Developer',
      years: 'nov. 2022 - Present',
    },
    {
      company: 'Ceasfor',
      job: 'Frontend Developer Junior',
      years: 'jul. 2022 - nov. 2022',
    },
  ];

  const studies = [
    {
      school: 'UOC - Universitat Oberta de Catalunya',
      title: 'Ingeniería Informática',
      years: '2021 - Present ',
      imageUrl: 'uoc.png',
    },
    {
      school: 'Institut Francesc Vidal i Barraquer',
      title: 'Grado Superior en Administración de Sistemas Informáticos en red.',
      years: '2017 - 2019',
      imageUrl: 'vidal.png',
    },
  ];

  return (
    <section className="p-2 lg:px-8 mt-6 lg:mt-12" id='about'>
      <h2 className="text-3xl font-medium mb-4 lg:mb-8">{t('title')}</h2>
      <div className="grid lg:grid-cols-4 text-normal font-light mt-4 text-black gap-20">
        <div className="col-span-3">
          <article>
            <h2 className="text-xl font-medium mb-4 lg:mb-8 mt-8">
            {t('my_history')}
            </h2>

            <p>
            {t('history')}
            </p>
            <p className="mt-4">
            {t('history2')}
            </p>
          </article>

          <div id='experience'>
            <h2 className="text-xl font-medium mb-4 lg:mb-8 mt-8">
            {t('experience')}
            </h2>

            {experiences.map((experience, index) => (
              <div key={index}>
                <div className="flex flex-col lg:flex-row justify-between mb-4 mt-2">
                  <div>
                    <p className="font-semibold">{experience.company}</p>
                    <p className="text-slate-600">{experience.job}</p>
                  </div>
                  <p className="text-slate-400 mt-2 lg:mt-0 lg:text-right items-end flex">
                    {experience.years}
                  </p>
                </div>
                <hr />
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-xl font-medium mb-4 lg:mb-8 mt-8">
            {t('studies')}
            </h2>

            {studies.map((study, index) => (
              <div key={index}>
                <div className="flex flex-col lg:flex-row justify-between mb-4 mt-2">
                  <div className="flex gap-2 items-center">
                    <img
                      src={study.imageUrl}
                      alt={`logo ${study.school}`}
                      width={24}
                      height={24}
                    />
                    <div>
                      <p className=' font-semibold'>{study.school}</p>
                      <p className="text-slate-600">{study.title}</p>
                    </div>
                  </div>
                  <p className="text-slate-400 mt-2 lg:mt-0 lg:text-right items-end flex">
                    {study.years}
                  </p>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
