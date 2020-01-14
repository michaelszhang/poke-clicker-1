import React, { Component } from "react";

const commarize = (ipt, decimalPlaces) => {
  if (ipt >= 1e6 && ipt < 1e66) {
    const units = [
      "thousand",
      "million",
      "billion",
      "trillion",
      "quadrillion",
      "quintillion",
      "sextillion",
      "septillion",
      "octillion",
      "nonillion",
      "decillion",
      "undecillion",
      "duodecillion",
      "tredecillion",
      "quattuordecillion",
      "quindecillion",
      "sexdecillion",
      "septendecillion",
      "octodecillion",
      "novemdecillion",
      "vigintillion"
    ];

    const unit = Math.floor(Math.log10(ipt) / 3);
    const nipt = (ipt / Math.pow(10, 3 * unit)).toPrecision(4);

    return nipt + " " + units[unit - 1];
  }

  return ipt.toFixed(decimalPlaces);
};

export default commarize;
