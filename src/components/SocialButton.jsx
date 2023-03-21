import React from 'react'
import { Link } from 'react-router-dom';
export default function SocialButton({srText, href, children, key}) {
  return (
    <Link to={href ? href : "/#"} key={key}>
      {children}
      <span className="sr-only">{srText}</span>
    </Link>
  );
}
