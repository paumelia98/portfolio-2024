import Image from 'next/image'

export const About = () => {
    return (
      <>
        <section className="p-2 lg:px-8 mt-6 lg:mt-12">
          <h2 className="text-3xl font-medium">My history</h2>
          <div className=" grid lg:grid-cols-2  text-normal font-light mt-4 text-black gap-20">

          
            <div>
                <p>
                    Me llamo Pau y nací en 1998 en Tarragona, Catalunya, España. Hace unos años, comencé un grado superior de informática, donde descubrí mi verdadera pasión: la programación y el desarrollo web. Tras finalizar el grado superior, decidí continuar mi formación y empecé un grado universitario online en la UOC de Ingeniería Informática. Actualmente, estoy compaginando mi trabajo como desarrollador frontend con mis estudios universitarios, sin problema.
                </p>
                <p className="mt-4">
                    He tenido la oportunidad de trabajar en proyectos que me han permitido aplicar y perfeccionar mis habilidades en desarrollo frontend. Uno de los logros de los que me siento más orgulloso es mi participación en el proyecto Aprobatus, un proyecto desde 0 donde logramos obtener más de 17.000 solicitudes web de contacto en menos de un año.
                </p>
            </div> 
            
           
        
          </div>

       
          
        </section>
      </>
    );
  };
  