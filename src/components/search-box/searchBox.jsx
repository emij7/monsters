import "./searchBox.styles.css";

export const SearchBox = ({
  className,
  onChangeHandler,
  searchPlaceholder,
}) => (
  <input
    className={className}
    type="search"
    placeholder={searchPlaceholder}
    onChange={onChangeHandler}
  />
);

// export default class SearchBox extends Component {
//   render() {
//     const { onChangeHandler, searchPlaceholder, className } = this.props;
//     return (
//       <input
//         className={className}
//         type="search"
//         placeholder={searchPlaceholder}
//         onChange={onChangeHandler}
//       />
//     );
//   }
// }
