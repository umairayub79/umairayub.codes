import React from 'react';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
    return (
        <div className="flex flex-col lg:flex-row max-w-4xl mx-auto p-4">
            <Helmet>
                <title>About - Umair Ayub</title>
            </Helmet>
            <div className="flex flex-col max-w-lg p-4 order-2">
                <h1 className="text-3xl font-bold mb-4">About Me</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Hi, I'm Umair Ayub, a self-taught student and maker. I started my web development journey in 2019 and have been passionate about it ever since.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                    I have experience working with various technologies including HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap, and have built responsive and user-friendly web applications.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                    Additionally, I have also ventured into Android app development using both Java and Kotlin. It has been an exciting journey exploring the mobile development space and creating engaging Android applications.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                    As a continuous learner, I am always eager to expand my knowledge and stay up-to-date with the latest trends and advancements in the industry. I enjoy exploring new technologies, frameworks, and tools to enhance my skills and improve my craft.
                </p>
                <p className="text-lg text-gray-700">
                    In my free time, I love working on personal projects, experimenting with new ideas, and applying what I have learned. I believe that the process of learning and building is a valuable part of my growth as a developer.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                    I am excited about the possibilities in the web and mobile development field, and I look forward to contributing to meaningful projects and collaborating with like-minded individuals. If you would like to connect or have any inquiries, please feel free to reach out to me through the contact information provided below.
                </p>
                <p className="text-lg text-gray-600">
                    This website was built using React and other tools. Hosted on
                    Netlify.
                </p>
            </div>
            <img src="https://avatars.githubusercontent.com/u/46655787?v=4" className="rounded-full w-60 h-60 lg:w-72 lg:h-72 mx-auto mt-4 lg:mt-0 lg:order-2" alt="Profile" />
        </div>
    );
};

export default AboutPage;
