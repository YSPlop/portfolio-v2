"use client";

import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

interface MDXComponentProps {
  source: MDXRemoteSerializeResult;
}

interface PreProps {
  children: {
    props: {
      children: string;
      className?: string;
    };
  };
}

export default function MDXClient({ source }: MDXComponentProps) {
  const components = {
    img: ({ src, alt }: { src?: string; alt?: string }) => {
      if (!src) return null;
      
      if (src.startsWith('http')) {
        return <img src={src} alt={alt || ''} className="w-full h-auto my-4 rounded-lg" />;
      }
      
      return (
        <div className="relative w-full h-64 my-4">
          <Image 
            src={src} 
            alt={alt || ''} 
            fill 
            className="object-contain rounded-lg" 
          />
        </div>
      );
    },
    a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
      <Link href={href || '#'} className="text-blue-400 hover:underline">
        {children}
      </Link>
    ),
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
    ),
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />
    ),
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3 className="text-xl font-semibold mt-4 mb-2" {...props} />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p className="my-4 leading-relaxed" {...props} />
    ),
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
      <ul className="list-disc pl-6 my-4 space-y-2" {...props} />
    ),
    ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
      <ol className="list-decimal pl-6 my-4 space-y-2" {...props} />
    ),
    li: (props: React.HTMLAttributes<HTMLLIElement>) => (
      <li className="pl-2" {...props} />
    ),
    pre: ({ children }: PreProps) => (
      <div className="relative group">
        <pre className="p-4 my-4 overflow-x-auto bg-[#1e1e1e] rounded-lg text-sm font-mono leading-6 line-numbers">
          {children.props.children}
        </pre>
        <button 
          onClick={() => navigator.clipboard.writeText(children.props.children)}
          className="absolute top-3 right-3 p-2 rounded-lg bg-zinc-700/30 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Copy
        </button>
      </div>
    ),
    code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
      if (!className) {
        return <code className="px-1.5 py-0.5 bg-zinc-800 rounded text-sm font-mono text-pink-400" {...props} />;
      }
      return <code className={`${className} font-mono`} {...props} />;
    },
    blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
      <blockquote className="pl-4 my-6 border-l-4 border-zinc-700 italic text-zinc-400" {...props} />
    ),
    table: (props: React.HTMLAttributes<HTMLTableElement>) => (
      <div className="my-4 overflow-x-auto">
        <table className="min-w-full divide-y divide-zinc-700" {...props} />
      </div>
    ),
    th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
      <th className="px-4 py-2 bg-zinc-800 font-semibold text-left" {...props} />
    ),
    td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
      <td className="px-4 py-2 border-t border-zinc-700" {...props} />
    ),
  };

  return <MDXRemote {...source} components={components} />;
} 