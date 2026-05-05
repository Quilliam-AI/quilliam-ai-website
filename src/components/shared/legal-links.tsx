import type { ReactNode } from "react";
import { siteConfig } from "@/lib/content";

type LegalLinkProps = {
  className?: string;
  children?: ReactNode;
};

export function CompaniesHouseLink({
  className,
  children = siteConfig.companyNumber,
}: LegalLinkProps) {
  return (
    <a
      href={siteConfig.companiesHouseUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export function IcoRegistrationLink({
  className,
  children = siteConfig.icoRegistrationNumber,
}: LegalLinkProps) {
  return (
    <a
      href={siteConfig.icoRegistrationUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
