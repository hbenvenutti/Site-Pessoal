import type { Certificates } from '../../@types/certificates';

const baseImgUrl = './src/assets/certificates/';

export const certificates: Certificates = [
  {
    institution: 'Rocketseat',
    institutionSite: 'https://lp.rocketseat.com.br/ignite',
    image: `${baseImgUrl}node.png`,
    name: 'Ignite - Trilha Node',
    result: '10/10',
    date: new Date('07/09/2022'),
    validationLink:
      'https://app.rocketseat.com.br/certificates/1dd4a0fe-9cab-4588-833d-ea5ef79188b2'
  },
  {
    institution: 'EF Set',
    institutionSite: 'https://www.efset.org/',
    image: `${baseImgUrl}efset.png`,
    name: 'Certificado de Proficiência em Inglês',
    result: 'C2 Proficient',
    date: new Date('05/08/2022'),
    validationLink: 'https://www.efset.org/cert/HgNU5F'
  },
  {
    institution: 'Cisco',
    institutionSite: 'https://www.netacad.com/',
    image: `${baseImgUrl}ccna.png`,
    name: 'CCNA Routing and Switching: Introduction to Networks',
    result: 'Concluído',
    date: new Date('11/02/2019'),
    validationLink: '#'
  }
];
