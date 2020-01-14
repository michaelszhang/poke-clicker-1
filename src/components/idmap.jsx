import React, { Component } from "react";

const idmap = (id, version, starter) => {
  if (starter === 0) {
    if (id === 1) return { name: "Snivy", num: 495 };
    if (id === 2) return { name: "Servine", num: 496 };
    if (id === 3) return { name: "Serperior", num: 497 };
  }
  if (starter === 1) {
    if (id === 1) return { name: "Tepig", num: 498 };
    if (id === 2) return { name: "Pignite", num: 499 };
    if (id === 3) return { name: "Emboar", num: 500 };
  }
  if (starter === 2) {
    if (id === 1) return { name: "Oshawott", num: 501 };
    if (id === 2) return { name: "Dewott", num: 502 };
    if (id === 3) return { name: "Samurott", num: 503 };
  }
  if (version === 0) {
    if (id === 10) return { name: "Rufflet", num: 627 };
    if (id === 11) return { name: "Braviary", num: 628 };
    if (id === 17) return { name: "Tornadus", num: 641 };
    if (id === 18) return { name: "Reshiram", num: 643 };
  }
  if (version === 1) {
    if (id === 10) return { name: "Vullaby", num: 629 };
    if (id === 11) return { name: "Mandibuzz", num: 630 };
    if (id === 17) return { name: "Thundurus", num: 642 };
    if (id === 18) return { name: "Zekrom", num: 644 };
  }
  if (id === 4) return { name: "Klink", num: 599 };
  if (id === 5) return { name: "Klang", num: 600 };
  if (id === 6) return { name: "Klinklang", num: 601 };
  if (id === 7) return { name: "Litwick", num: 607 };
  if (id === 8) return { name: "Lampent", num: 608 };
  if (id === 9) return { name: "Chandelure", num: 609 };
  if (id === 12) return { name: "Deino", num: 633 };
  if (id === 13) return { name: "Zweilous", num: 634 };
  if (id === 14) return { name: "Hydreigon", num: 635 };
  if (id === 15) return { name: "Larvesta", num: 636 };
  if (id === 16) return { name: "Volcarona", num: 637 };
  if (id === 19) return { name: "Kyurem", num: 646 };

  return { name: "Victini", num: 494 };
};

export default idmap;
