import React from "react";
import AOSWrapper from "../../common/AOSWrapper";
import { articles } from "../../data/homeData";

const BlogSection = () => (
  <section className="bg-black py-16 md:py-24">
    <div className="container mx-auto px-5 md:px-10 lg:px-20 flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h6 className="text-white text-base font-primary">
          Blog &amp; Articles
        </h6>
        <AOSWrapper animation="slide-up">
          <h2 className="text-4xl md:text-6xl font-primary font-semibold text-white">
            Latest Articles
          </h2>
        </AOSWrapper>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((a) => (
          <AOSWrapper key={a.id} animation="slide-up">
            <a
              href={a.href}
              className="group flex h-full flex-col gap-5 rounded-md border border-white/10 bg-[#0f0f0f] p-5 transition-colors hover:border-[#c6f10a]/60"
            >
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span>{a.category}</span>
                <span>{a.date}</span>
              </div>
              <h3 className="text-xl font-primary font-semibold text-white">
                {a.title}
              </h3>
              <div className="mt-auto overflow-hidden rounded">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </a>
          </AOSWrapper>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="circle-btn">
          <span className="fill"></span>
          <span className="text">VIEW ALL</span>
        </button>
      </div>
    </div>
  </section>
);

export default BlogSection;
