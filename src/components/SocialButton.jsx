import React from 'react'
import { Link } from 'react-router-dom';
export default function SocialButton({srText, css, href, icon, key}) {
  return (
    <Link to={href ? href : "/#"} key={key}>
      <icon
        className={`w-6 h-6 text-gray-900 hover:text-slate-400 ${css}`}
      />
      <span className="sr-only">{srText}</span>
    </Link>
  );
}
