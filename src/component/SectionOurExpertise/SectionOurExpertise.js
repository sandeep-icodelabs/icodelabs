import React from 'react';
import styles from './SectionOurExpertise.module.css';
import ContentWidth from '../ContentWidth/ContentWidth';
import IconCollection from '../IconCollection/IconCollection';

const technologies = [
    { title: 'React (JS/Native)', icon: <IconCollection name="react-our-expertize" />, description: 'Lorem ipsum dolor sit amet consectetur. Lacus volutpat nibh hendrerit viverra elit quis sed id. Vel eget pharetra fermentum scelerisque integer orci. Pretium viverra aliquet senectus natoque tincidunt faucibus ipsum morbi maecenas.' },
    { title: 'NextJS', icon: <IconCollection name="next-our-expertize" />, description: 'Lorem ipsum dolor sit amet consectetur. Lacus volutpat nibh hendrerit viverra elit quis sed id. Vel eget pharetra fermentum scelerisque integer orci. Pretium viverra aliquet senectus natoque tincidunt faucibus ipsum morbi maecenas.' },
    { title: 'Angular', icon: <IconCollection name="Angular-our-expertize" />, description: 'Lorem ipsum dolor sit amet consectetur. Lacus volutpat nibh hendrerit viverra elit quis sed id. Vel eget pharetra fermentum scelerisque integer orci. Pretium viverra aliquet senectus natoque tincidunt faucibus ipsum morbi maecenas.' },
    { title: 'Flutter', icon: <IconCollection name="Flutter-our-expertize" />, description: 'Lorem ipsum dolor sit amet consectetur. Lacus volutpat nibh hendrerit viverra elit quis sed id. Vel eget pharetra fermentum scelerisque integer orci. Pretium viverra aliquet senectus natoque tincidunt faucibus ipsum morbi maecenas.' },
    { title: 'Android', icon: <IconCollection name="Android-our-expertize" />, description: 'Lorem ipsum dolor sit amet consectetur. Lacus volutpat nibh hendrerit viverra elit quis sed id. Vel eget pharetra fermentum scelerisque integer orci. Pretium viverra aliquet senectus natoque tincidunt faucibus ipsum morbi maecenas.' },
    { title: 'Node Js', icon: <IconCollection name="nodejs-our-expertize" />, description: 'Lorem ipsum dolor sit amet consectetur. Lacus volutpat nibh hendrerit viverra elit quis sed id. Vel eget pharetra fermentum scelerisque integer orci. Pretium viverra aliquet senectus natoque tincidunt faucibus ipsum morbi maecenas.' },
    { title: 'Python', icon: <IconCollection name="react-our-expertize" />, description: 'Lorem ipsum dolor sit amet consectetur. Lacus volutpat nibh hendrerit viverra elit quis sed id. Vel eget pharetra fermentum scelerisque integer orci. Pretium viverra aliquet senectus natoque tincidunt faucibus ipsum morbi maecenas.' },
    { title: 'iOS', icon: <IconCollection name="ios-our-expertize" />, description: 'Lorem ipsum dolor sit amet consectetur. Lacus volutpat nibh hendrerit viverra elit quis sed id. Vel eget pharetra fermentum scelerisque integer orci. Pretium viverra aliquet senectus natoque tincidunt faucibus ipsum morbi maecenas.' },
];

const SectionOurExpertise = (props) => {
    const {data = []}=props?.ourExpertise?.data || {} ; 
    return (
        <section className={styles.container}>
            <ContentWidth>
                <h2 className={styles.title}>Our Expertise In</h2>
                <p className={styles.subtitle}>Trending Technologies The World Is Looking At</p>
                <p className={styles.description}>
                    We specialize in creating cutting-edge digital solutions that align perfectly with your business objectives. Our expertise lies in leveraging the latest technologies to deliver exceptional results tailored to your needs.
                </p>

                <div className={styles.grid}>
                    {data.map((tech, index) => ( 
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}><img src={tech?.attributes?.Image?.data[0]?.attributes?.url}/>{tech.icon}</div>
                            <h3 className={styles.cardTitle}>{tech?.attributes?.Title}</h3>
                            <p className={styles.cardDescription}>{tech.description}</p>
                        </div>
                    ))}
                </div>
            </ContentWidth>
        </section>
    );
};

export default SectionOurExpertise;
