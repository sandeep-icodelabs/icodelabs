import React from "react";
import css from "./Flutter.module.css";
import Image from "next/image";
import toolsIllustration from "../../assets/images/Flutter/technology.png";

const ToolsAndTech = () => {
    const technologies = [
        {
            title: "Flutter Framework",
            description: "The foundation of Flutter app development, providing a robust UI toolkit for creating natively compiled applications for mobile, web, and desktop from a single codebase."
        },
        {
            title: "Dart Programming",
            isHighlighted: true,
            description: "A powerful, optimized language used with Flutter, known for its fast performance, concise syntax, and strong support for asynchronous programming."
        },
        {
            title: "Material Design",
            description: "Google's design system is used to create visually appealing, consistent, and user-friendly interfaces across different devices and platforms."
        },
        {
            title: "Firebase Integration",
            description: "A comprehensive backend-as-a-service (BaaS) that enables real-time database management, authentication, cloud storage, and more, enhancing app functionality."
        },
        {
            title: "State Management",
            description: "Techniques like Provider, Riverpod, Bloc, and Redux are used to efficiently manage the app's state, ensuring smooth performance and better maintainability."
        },
        {
            title: "Continuous Integration",
            description: "Automated CI/CD tools like Codemagic, GitHub Actions, and Bitrise help streamline the development process, ensuring faster deployments and reduced errors."
        }
    ];

    return (
        <div className={css.toolsAndTechContainer}>
            <div className={css.whyChooseHeader}>
                <h1 className={css.whyChooseTitle}>
                    Flutter App Development Tools & Technologies
                </h1>
                <p className={css.whyChooseSubtitle}>
                    At icodelabs, we leverage cutting-edge tools and technologies to build robust Flutter applications:
                </p>
            </div>
            <div className={css.toolsAndTech}>
                <div className={css.toolsContent}>


                    <div className={css.technologiesList}>
                        {technologies.map((tech, index) => (
                            <div key={index} className={css.techItem}>
                                <h3 className={`${css.techTitle} ${tech.isHighlighted ? css.highlighted : ''}`}>
                                    {tech.title}
                                </h3>
                                <p className={css.techDescription}>
                                    {tech.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={css.toolsIllustration}>
                    <Image
                        src={toolsIllustration}
                        alt="Flutter Development Tools"
                       
                        className={css.illustrationImage}
                    />
                </div>
            </div>
        </div>
    );
};

export default ToolsAndTech;