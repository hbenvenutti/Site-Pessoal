import { CertificateSpanColor } from '../../@types/enums/certificates.enum';
import igniteImg from '../../assets/certificates/node.png';
import ccnaImg from '../../assets/certificates/ccna.png';
import efsetImg from '../../assets/certificates/efset.png';
import sololearnImg from '../../assets/certificates/sololearn.png';
import extensionImg from '../../assets/certificates/extension.png';

import type { Certificates } from '../../@types/providers/certificates';

// * ------------------------------------------------------------------------------------------ * //

export const certificates: Certificates = [
  {
    institution: 'Rocketseat',
    institutionSite: 'https://lp.rocketseat.com.br/ignite',
    image: igniteImg,
    name: 'Ignite - Trilha Node',
    result: '10/10',
    date: new Date('09/07/2022'),
    validationLink:
      'https://app.rocketseat.com.br/certificates/1dd4a0fe-9cab-4588-833d-ea5ef79188b2',
    spanColor: CertificateSpanColor.NODE
  },
  {
    institution: 'Instituto Federal - Rio Grande do Sul',
    institutionSite: 'https://ifrs.edu.br/viamao/',
    image: extensionImg,
    name: 'Monitor voluntário no curso de Informática Básica',
    result: 'Concluído',
    date: new Date('03/23/2023'),
    validationLink: 'https://sgce.ifrs.edu.br/validar/E370401F',
    spanColor: CertificateSpanColor.IFRS
  },
  {
    institution: 'EF Set',
    institutionSite: 'https://www.efset.org/',
    image: efsetImg,
    name: 'Certificado de Proficiência em Inglês',
    result: 'C2 Proficient',
    date: new Date('08/05/2022'),
    validationLink: 'https://www.efset.org/cert/HgNU5F',
    spanColor: CertificateSpanColor.EF_SET
  },
  {
    institution: 'Cisco',
    institutionSite: 'https://www.netacad.com/',
    image: ccnaImg,
    name: 'CCNA Routing and Switching: Introduction to Networks',
    result: 'Concluído',
    date: new Date('02/11/2019'),
    validationLink: '#',
    spanColor: CertificateSpanColor.CISCO
  },
  {
    institution: 'Solo Learn',
    institutionSite: 'https://www.sololearn.com/',
    image: sololearnImg,
    name: 'SQL Fundamentals course',
    result: 'Concluído',
    date: new Date('06/27/2019'),
    validationLink: 'https://www.sololearn.com/Certificate/CT-ZLZZZIUD/pdf',
    spanColor: CertificateSpanColor.SOLO_LEARN
  }
];
