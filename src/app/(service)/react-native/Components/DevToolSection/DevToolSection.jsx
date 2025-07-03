import React from "react";
import css from "./DevToolSection.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";

export default function DevToolSection() {
  return (
    <ContentWidth className={css.mainWrapper}>
      <div className={css.contentContainer}>
        <h2>
          Our Expertise In Popular React Native Developer Tools & Technologies
        </h2>
        <p>
          Our developers employ React Native, a widely used JavaScript framework
          code library, enabling them to create appealing user interfaces and
          dynamic mobile apps.
        </p>
      </div>

      <div className={css.gridContainer}>
        {tools.map((tool, index) => (
          <div key={index} className={css.gridItem}>
            <div className={css.icon}>
              <IconCollection name={tool.icon} />
            </div>

            <div>
              <h5>{tool.name}</h5>
              <p>{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </ContentWidth>
  );
}

const tools = [
  {
    name: "Atom",
    description:
      "A cross-platform editor for developers with open-source packages to enhance features and functionalities on Mac, Linux, and Windows.",
    icon: "Atom",
  },
  {
    name: "Expo",
    description:
      "Open-source toolchain for skilled React Native devs with strong documentation, forums, and powerful features.",
    icon: "Expo",
  },
  {
    name: "Visual Studio Code",
    description:
      "This robust React Native source code editor supports various languages like JavaScript, TypeScript, Java, C#, Python, PHP, and C++.",
    icon: "vsCode",
  },
  {
    name: "ESLint",
    description:
      "This node.js-based tool detects JavaScript and JSX errors, aiding in programming and exploring existing code.",
    icon: "eslint",
  },
  {
    name: "Expo",
    description:
      "Go-to debugger and live code editor for building apps across different environments like native and front-end.",
    icon: "ExpoG",
  },
  {
    name: "InVision",
    description:
      "Open-source React Native tool elevating user experience via prototyping, animation, and collaboration in app design.",
    icon: "InVision",
  },
];
