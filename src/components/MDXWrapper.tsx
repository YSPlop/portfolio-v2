"use client";

import dynamic from 'next/dynamic';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

const MDXClient = dynamic(() => import('./MDXClient'), { ssr: false });

export function MDXWrapper({ source }: { source: MDXRemoteSerializeResult }) {
  return <MDXClient source={source} />;
} 