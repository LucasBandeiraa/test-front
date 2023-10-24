import Header from '@/components/Header/Header'
import predio from '../../public/img/predio.png'
import garota from '../../public/img/garota.png'
import casal from '../../public/img/casal.png'
import menina from '../../public/img/menina.png'
import Image from 'next/image'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ["300", "400", "500"] })

export default function Home() {
  return (
    <div className="bg-gray">
      <Header />
      <div className={`bg-red h-60 xl:h-48 flex justify-center items-center w-100 mx-auto text-7xl xl:text-8xl ${roboto.className}`}>
        <h1 className='text-white text-center xl:text-left xl:text-black'>Nossa <span className='text-white '>Identidade</span></h1>
      </div>
      <div className='xl:bg-red xl: flex flex-col xl:flex-row justify-center gap-8'>
        <div className='bg-red'>
          <div className=' flex w-5/6 xl:justify-center xl:h-4/6 2xl:h-5/6 2xl:w-full mx-auto mt-6 xl:mt-0 xl:mx-auto '>
            <Image
              src={predio}
              alt="predio"
              className='rounded-3xl -mb-10 shadow-lg'
            />
          </div>
        </div>
        <div className='w-100 bg-gray xl:bg-red mx-auto mt-4 xl:mt-0 xl:mx-0 xl:w-5/12  '>
          <div className='flex lg:hidden w-5/6 mx-auto mt-6 mb-6'>
            <h1 className='font-black text-5xl'>Mais de <span className='text-red'>150 anos</span> de história</h1>
          </div>
          <p className={`w-5/6 mx-auto mt-4 xl:w-100 xl:mx-0 xl:mt-0 text-light-gray xl:text-white text-3xl ${roboto.className}`}>
            Com mais de 150 anos de história, o
            Mackenzie é uma instituição educacional
            pioneira, agente de inovações pedagógicas.
            Comprometido com valores e princípios
            cristãos, o Instituto busca formar cidadãos
            capazes de discernir, realizar uma leitura do
            mundo e intervir na sociedade.
          </p>
          <div className='w-5/6 flex justify-start xl:justify-center'>
            <button type="button" className={`text-red xl:text-white bg-none border-0 xl:border-4 xl:border-white  focus:outline-none hover:bg-white hover:text-red focus:ring-4 focus:red font-medium rounded-lg px-0 xl:px-5 py-0 ml-8 md:ml-16 lg:ml-20 xl:ml-0 xl:py-2.5 xl:mr-2 xl:mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-0 xl:mt-16 h-24 w-max xl:w-80 text-3xl xl:text-3xl uppercase tracking-wider ${roboto.className}`}>Saiba mais</button>
          </div>
        </div>
      </div>
      <div className='mt-0 xl:mt-16 flex flex-col-reverse xl:flex-row justify-center gap-8 h-auto '>
        <div className='w-5/6 mx-auto mt-8 xl:mt-0 xl:mx-0 xl:w-5/12'>
          <p className={`text-light-gray text-2xl ${roboto.className}`}>
            O Sistema Mackenzie de Ensino é líder na oferta de uma
            proposta educacional sustentada pela tradição cristã. Com
            materiais didáticos e soluções pedagógicas, atendemos mais
            de 400 escolas, incluindo unidades próprias e parceiras.
            Destacamo-nos como o primeiro sistema de ensino cristão e o
            mais relevante academicamente no país.
          </p>
        </div>
        <div className='w-5/6 mx-auto mt-8 xl:mt-0 xl:mx-0 xl:w-5/12'>
          <Image
            src={garota}
            alt="garota"
            className='rounded-3xl shadow-lg'
          />
        </div>
      </div>
      <div className='mt-8 flex flex-col xl:flex-row justify-center gap-8 h-auto'>
        <div className='w-5/6 mx-auto mt-8 xl:mt-0 xl:mx-0 xl:w-5/12'>
          <Image
            src={casal}
            alt="casal"
            className='rounded-3xl shadow-lg mt-0 xl:-mt-24 2xl:-mt-52'
          />
        </div>
        <div className='w-5/6 mx-auto mt-8 xl:mt-0 xl:mx-0 xl:w-5/12'>
          <p className={`text-light-gray text-2xl mt-4 ${roboto.className}`}>
            O Sistema Mackenzie de Ensino trabalha para fornecer uma
            pedagogia cristã, com materiais e recursos didáticos, que
            conduza essa geração a glorificar a Deus por meio de uma
            atuação biblicamente orientada, social e culturalmente
            relevantes.
          </p>
        </div>
      </div>

      <div className='flex flex-col-reverse xl:flex-row justify-center gap-8 h-auto mt-8 pb-8'>
        <div className='w-5/6 mx-auto mt-8 xl:mt-0 xl:mx-0 xl:w-5/12'>
          <h1 className={`text-black text-4xl ${roboto.className}`}>Histórico do <span className='text-red'>SME</span></h1>
          <p className={`text-light-gray text-2xl mt-8 ${roboto.className}`}>
            Desenvolvemos um modelo pedagógico alinhado com a
            filosofia cristã e o entendimento de que todo conhecimento
            provém de Deus e é o ponto convergente de todo raciocínio.
          </p>
          <button type="button" className={`text-red bg-none p-0 border-none focus:outline-none hover:bg-white hover:text-red focus:ring-4 focus:red font-medium rounded-lg mr-2 mb-2 mt-4 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 h-max w-max text-3xl uppercase tracking-wider ${roboto.className}`}>Saiba mais</button>
        </div>
        <div className='w-5/6 mx-auto mt-8 xl:mt-0 xl:mx-0 xl:w-5/12'>
          <Image
            src={menina}
            alt="menina"
            className='rounded-3xl shadow-lg'
          />
        </div>
      </div>
    </div>
  )
}
