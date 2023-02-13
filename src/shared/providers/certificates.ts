import { CertificateSpanColor } from '../../@types/enums/certificates.enum';

import type { Certificates } from '../../@types/certificates';

const baseImgUrl = './src/assets/certificates/';

export const certificates: Certificates = [
  {
    institution: 'Rocketseat',
    institutionSite: 'https://lp.rocketseat.com.br/ignite',
    image: `${baseImgUrl}node.png`,
    name: 'Ignite - Trilha Node',
    result: '10/10',
    date: new Date('09/07/2022'),
    validationLink:
      'https://app.rocketseat.com.br/certificates/1dd4a0fe-9cab-4588-833d-ea5ef79188b2',
    spanColor: CertificateSpanColor.NODE
  },
  {
    institution: 'EF Set',
    institutionSite: 'https://www.efset.org/',
    image: `${baseImgUrl}efset.png`,
    name: 'Certificado de Proficiência em Inglês',
    result: 'C2 Proficient',
    date: new Date('08/05/2022'),
    validationLink: 'https://www.efset.org/cert/HgNU5F',
    spanColor: CertificateSpanColor.EF_SET
  },
  {
    institution: 'Cisco',
    institutionSite: 'https://www.netacad.com/',
    image: `${baseImgUrl}ccna.png`,
    name: 'CCNA Routing and Switching: Introduction to Networks',
    result: 'Concluído',
    date: new Date('02/11/2019'),
    validationLink: '#',
    spanColor: CertificateSpanColor.CISCO
  },
  {
    institution: 'Solo Learn',
    institutionSite: 'https://www.sololearn.com/',
    image: `${baseImgUrl}sololearn.png`,
    name: 'SQL Fundamentals course',
    result: 'Concluído',
    date: new Date('06/27/2019'),
    // date: new Date('11/02/2019'),
    validationLink: 'https://www.sololearn.com/Certificate/CT-ZLZZZIUD/pdf',
    spanColor: CertificateSpanColor.SOLO_LEARN
  }
];
