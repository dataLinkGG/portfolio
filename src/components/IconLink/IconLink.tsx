import { ReactElement } from "react";

type IconLinkProps = {
  url: string; // Simplified type for the URL
  altText?: string; // Prop for image alt text
  className?: string; // Optional prop for image class
  children?: ReactElement; // Optional children prop for flexibility
};

const IconLink: React.FC<IconLinkProps> = ({
  url,
  altText,
  className,
  children,
}) => {
  return (
    <a href={url} target="_blank">
      {children ? children : <img src="" alt={altText} className={className} />}
    </a>
  );
};

export default IconLink;
