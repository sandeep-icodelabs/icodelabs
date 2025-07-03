import React from 'react';
import styles from './AndroidTechnologies.module.css';
import ContentWidth from '@/component/ContentWidth/ContentWidth';
import intel from '../../assets/images/android/intel.svg';
import java from '../../assets/images/android/java.svg';
import kolin from '../../assets/images/android/kolin.svg';
import sqLite from '../../assets/images/android/sqLite.svg';
import androidStudion from '../../assets/images/android/androidStudion.svg';
import sclipse from '../../assets/images/android/sclipse.svg';
import Image from 'next/image';
import IconCollection from '@/component/IconCollection/IconCollection';

const technologies = [
    { name: 'Kotlin', description: 'Kotlin is a modern, concise, and highly expressive programming language that enhances code readability and maintainability. It is the preferred language for Android development due to its interoperability with Java and enhanced security features.', icon: kolin },
    { name: 'Java', description: 'Java has been a core language for Android development for years. With its robust architecture, extensive libraries, and cross-platform capabilities, it allows us to develop secure and scalable applications that deliver exceptional performance.', icon: java },
    { name: 'SQLite', description: 'For efficient data storage and management, we integrate SQLite, a lightweight database engine used in Android applications. It ensures fast data retrieval, offline capabilities, and seamless database management.', icon: sqLite },
    { name: 'Android Studio', description: 'As the official IDE for Android development, Android Studio provides a rich set of tools, including real-time code analysis, a powerful emulator, and an intuitive UI designer. It allows for efficient development, debugging, and deployment of Android applications.', icon: androidStudion },
    { name: 'Eclipse', description: 'Eclipse is a versatile open-source development environment used for Java-based Android applications. It offers a customizable workspace, advanced debugging tools, and plugin support to enhance development efficiency.', icon: sclipse },
    { name: 'IntelliJ IDEA', description: 'IntelliJ IDEA is a powerful IDE that enhances Android development with features like smart code completion, advanced debugging, and seamless integration with various frameworks. It helps improve developer productivity and code efficiency.', icon: intel },
];

const AndroidTechnologies = () => {
    return (
        <>
            <div className={styles.banner}>
                {['Technology', 'Work Progress', 'IT Solution', 'Business'].map((item, index) => (
                    <div key={index} className={styles.bannerItem}>
                        <span className={styles.star}><IconCollection name="bannerStar"/></span>
                        <span className={styles.bannerText}>{item}</span>
                    </div>
                ))}
            </div>
            <ContentWidth>

                <div className={styles.container}>
                    <h2 className={styles.title}>Android App Development Tools & Technologies</h2>
                    <p className={styles.subtitle}>At icodelabs, we utilize the latest and most powerful Android development tools and technologies to build high-performance and scalable applications.</p>
                    <div className={styles.grid}>
                        {technologies.map((tech, index) => (
                            <div key={index} className={styles.card}>
                                <div className={styles.cardContent}>
                                <Image src={tech.icon} alt={tech.name} />
                                <h3 className={styles.cardTitle}>{tech.name}</h3>
                                </div>
                                <p className={styles.cardDescription}>{tech.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </ContentWidth>
        </>
    );
};

export default AndroidTechnologies;