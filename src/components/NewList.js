import React from "react";
import styles from "./Component1disabled.module.scss";
import options from "./data";
import PropTypes from "prop-types";
import Done from "@material-ui/icons/Done";
import AddIcon from "@material-ui/icons/AddCircleRounded";
import ArowDown from "@material-ui/icons/KeyboardArrowDown";
import { Typeahead } from "react-bootstrap-typeahead";
import moment from "moment";
import { AddItem } from ".";

const toDay = moment().format("ll");

export default function Glossary() {
  return (
    <div className="div-flexColmn">
      <div className="div-flexRow">
        <div></div>
        <h2 className="mt-3">My Wish List</h2>
        <img
          alt=""
          src="https://static.overlay-tech.com/assets/b38fe4c1-83cf-4862-ab2b-b86be8231dc9.svg"
        />
      </div>
      <div className="div-flexRow">
        <p className="p-body2">{toDay}</p>

        <p className="p-body2">0 items</p>
      </div>
      <div className="div-flexRow">
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21 41C32.0457 41 41 32.0457 41 21C41 9.9543 32.0457 1 21 1C9.9543 1 1 9.9543 1 21C1 32.0457 9.9543 41 21 41Z"
            fill="#C5C7D0"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21 41C32.0457 41 41 32.0457 41 21C41 9.95431 32.0457 1 21 1C9.95431 1 1 9.95431 1 21C1 32.0457 9.95431 41 21 41Z"
            stroke="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.75 14C21.75 13.5858 21.4142 13.25 21 13.25C20.5858 13.25 20.25 13.5858 20.25 14V20.25H14C13.5858 20.25 13.25 20.5858 13.25 21C13.25 21.4142 13.5858 21.75 14 21.75H20.25V28C20.25 28.4142 20.5858 28.75 21 28.75C21.4142 28.75 21.75 28.4142 21.75 28V21.75H28C28.4142 21.75 28.75 21.4142 28.75 21C28.75 20.5858 28.4142 20.25 28 20.25H21.75V14Z"
            fill="white"
          />
        </svg>
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21 41C32.0457 41 41 32.0457 41 21C41 9.95431 32.0457 1 21 1C9.95431 1 1 9.95431 1 21C1 32.0457 9.95431 41 21 41Z"
            fill="#A358DF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21 41C32.0457 41 41 32.0457 41 21C41 9.95431 32.0457 1 21 1C9.95431 1 1 9.95431 1 21C1 32.0457 9.95431 41 21 41Z"
            stroke="white"
          />
          <path
            d="M16.0222 22.3647H13.6844V26.3911H12.365V16.438H15.6599C16.781 16.438 17.6424 16.6932 18.2439 17.2036C18.85 17.714 19.1531 18.4569 19.1531 19.4321C19.1531 20.0519 18.9845 20.592 18.6472 21.0522C18.3146 21.5125 17.8497 21.8566 17.2527 22.0845L19.5906 26.3091V26.3911H18.1824L16.0222 22.3647ZM13.6844 21.2915H15.701C16.3527 21.2915 16.8699 21.1229 17.2527 20.7856C17.6401 20.4484 17.8338 19.9972 17.8338 19.4321C17.8338 18.8169 17.6492 18.3452 17.2801 18.0171C16.9155 17.689 16.3868 17.5226 15.6941 17.5181H13.6844V21.2915ZM22.1941 16.438L25.448 24.5591L28.7019 16.438H30.4041V26.3911H29.0916V22.5151L29.2146 18.3315L25.9471 26.3911H24.9422L21.6814 18.3521L21.8113 22.5151V26.3911H20.4988V16.438H22.1941Z"
            fill="white"
          />
        </svg>
      </div>
      <div style={{ margin: "32px 0 0 0" }}>
        <svg
          width="190"
          height="171"
          viewBox="0 0 190 171"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="95" cy="149.5" rx="95" ry="21.5" fill="#C4C4C4" />
          <path
            d="M147.25 31.4193C147.14 30.6188 146.435 30.1764 145.853 30.1278C145.272 30.0792 132.974 29.1726 132.974 29.1726C132.974 29.1726 124.433 20.7369 123.496 19.8034C122.558 18.87 120.726 19.1539 120.015 19.3623C119.91 19.393 118.149 19.9339 115.235 20.8303C112.5 16.5 110.5 14.5 106.5 13.5C103.5 13 101.752 13.4859 101.5 13.5C99.5001 5.5 93.0001 0.427086 89.4053 0.427086C68.7705 0.427086 58.912 26.0896 55.8208 39.1312C47.8029 41.603 42.1063 43.3599 41.3788 43.5875C36.9033 44.9839 36.7619 45.1246 36.1745 49.32C35.7311 52.4963 24.0204 142.595 24.0204 142.595L115.273 159.604L164.717 148.963C164.717 148.963 147.36 32.2198 147.25 31.4193ZM110.192 22.3826C107.9 23.0885 105.295 23.8902 102.471 24.7597C102.473 24.2188 102.476 23.6856 102.476 23.1038C102.476 18.0273 102.471 17.5 102.471 17.5C102.471 17.5 108.235 16.4366 110.192 22.3826ZM97.0581 19C97.0581 22.0203 97.0633 19.4096 97.0633 25.5359C97.0633 25.8492 97.0607 26.1356 97.0581 26.4259C92.0363 27.9732 86.5801 29.6534 81.111 31.3387C84.1817 19.549 96.0001 19 97.0581 19ZM89.0001 5.5C92.7436 5.93604 98.0358 14.2781 96.5001 14.5C88.5001 17 81.111 18 74.7897 33.2862C70.4145 34.634 66.1382 35.9511 62.1845 37.1697C65.6909 25.293 74.1789 5.5 89.0001 5.5Z"
            fill="#95BF46"
          />
          <path
            d="M145.853 30.1278C145.272 30.0792 132.974 29.1726 132.974 29.1726C132.974 29.1726 124.433 20.7369 123.496 19.8034C123.145 19.4556 122.672 19.2779 122.177 19.2012L115.278 159.603L164.717 148.963C164.717 148.963 147.36 32.2198 147.25 31.4193C147.14 30.6188 146.435 30.1764 145.853 30.1278Z"
            fill="#5E8E3E"
          />
          <path
            d="M139 140L133.5 29.5C137.333 29.6667 145.2 30 146 30C146.8 30 147.333 31.3333 147.5 32L165 149L139 140Z"
            fill="#507935"
          />
        </svg>
      </div>
      <div>
        <p>What would you like to buy?</p>
        <p>Your list is empty.</p>
      </div>
      <div style={{ margin: "0 0 24px 0" }}>
        <Typeahead
          id="basic-example"
          placeholder="Search Item"
          // selected={selected}
          // onChange={setSelected}
          // value={input}
          // onChange={handleInputChange}
          options={options}
        />
      </div>
    </div>
  );
}
