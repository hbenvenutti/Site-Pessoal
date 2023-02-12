interface Certificate {
  date: Date;
  institution: string;
  institutionSite: string;
  image: string;
  name: string;
  result: string;
  validationLink: string;
}

interface CertificateElementProps {
  certificate: Certificate;
}

export type Certificates = Certificate[];
