'use client'

import React, { useEffect } from "react";
import BlogDetailHero from "@/components/Blog/BlogDetail/BlogDetailHero";
import ContentSection from "@/components/Blog/BlogDetail/ContentSection";
import ArticleSection from "@/components/Blog/BlogDetail/ArticleSection";
import TagCloud from "@/components/Blog/BlogDetail/TagCloud";
import CourseBanner from "@/components/Blog/BlogDetail/CourseBanner"; 

export default function BlogDetail() {
   
   
  return (
    <div>
      <BlogDetailHero />
      <div className="max-w-[1500px] mx-auto overflow-hidden container-mar">
        <ContentSection />
        <ArticleSection />
        <TagCloud/>
      </div>
        <CourseBanner/>
    </div>
  );
}
