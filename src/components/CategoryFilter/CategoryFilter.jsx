import React from "react";
import { CategoryList, CategoryItem } from "./categoryFilter.styled";

const CATEGORIES = [
  "",
  "Fast Food",
  "Drinks",
  "Sweets",
  "Vegetables",
  "Fruits",
];

export default class CategoryFilter extends React.PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (
  //     nextProps.currentCategory === this.props.currentCategory &&
  //     nextProps.changeCategory === this.props.changeCategory
  //   ) {
  //     return false;
  //   }
  //   return true;
  // }

  render() {
    // console.log("re-render");
    return (
      <CategoryList>
        {CATEGORIES.map((category, index) => {
          return (
            <CategoryItem
              key={index}
              selected={this.props.currentCategory === category.toLowerCase()}
              onClick={() => this.props.changeCategory(category)}
            >
              {category ? category : "All"}
            </CategoryItem>
          );
        })}
      </CategoryList>
    );
  }
}
