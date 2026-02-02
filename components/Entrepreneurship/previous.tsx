'use client';
import React from 'react';
import Row from "../global/Row";

// فرض می‌کنیم داده‌های پروژه‌ها به این صورت باشد
const projects = [
    { id: 1, title: 'Arshia Gallery', imageUrl: '/images/Entrepreneurship/gallery.svg' },
    { id: 2, title: 'Arshia Gallery', imageUrl: '/images/Entrepreneurship/nature.svg' },
    { id: 3, title: 'Arshia Gallery', imageUrl: '/images/Entrepreneurship/laptop.svg' },
    { id: 4, title: 'Arshia Gallery', imageUrl: '/images/Entrepreneurship/vigen.svg' },
];

const Previous = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                {/* تیتر سکشن */}
                <h2 className="text-3xl font-bold text-center mb-10 text-black">
                    Our Previous Projects
                </h2>

                {/* استفاده از کامپوننت Row شما */}
                <Row className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="flex flex-col w-full bg-white rounded-2xl overflow-hidden shadow-lg  transition-all hover:shadow-lg"
                        >
                            {/* بخش تصویر با حفظ تناسب مربعی */}
                            <div className="aspect-square w-full">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* بخش متن پایین کارت مطابق عکس */}
                            <div className="p-4 text-center">
                                <span className="text-lg font-semibold">
                                    {project.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </Row>
            </div>
        </section>
    );
};

export default Previous;