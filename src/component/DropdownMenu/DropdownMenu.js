import Link from "next/link";
import React, { useState } from "react";
import css from "./DropdownMenu.module.css";
import classNames from "classnames";

const DropdownMenu = (props) => {
  const { isActive, allServiceDetails } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
 
  const isMobileLayout =
    typeof window !== "undefined" && window.innerWidth < 767;
  return (
    <div className={css.dropDownMenu}>
      <div
        className={classNames(
          css.dropdownBtn,
          isActive("/service") ? css.activeLink : ""
        )}
        onClick={toggle}
      >
        <span>Services</span>
        <span className={css.caret}>&nbsp;</span>
      </div>
      {isMobileLayout ? (
        <>
          {isOpen && (
            <div className={css.menuList}>
              {allServiceDetails?.map((data, i) => {
                return (
                  <Link
                    key={i}
                    href={data?.path}
                    className={classNames(
                      isActive(data?.id) ? css.activeMenu : ""
                    )}
                  >
                    {data?.title}
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <div className={css.menuList}>
          {allServiceDetails?.map((data, i) => {
            return (
              <Link
                key={i}
                href={data?.path}
                className={classNames(isActive(data?.id) ? css.activeMenu : "")}
              >
                {data?.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
