import type { CertificateSpanColor } from '../enums/certificates.enum';

// * ------------------------------------------------------------------------------------------ * //

interface Certificate {
  date: Date;
  institution: string;
  institutionSite: string;
  image: string;
  name: string;
  result: string;
  validationLink: string;
  spanColor: CertificateSpanColor;
}

interface CertificateElementProps {
  certificate: Certificate;
}

type Certificates = Certificate[];
