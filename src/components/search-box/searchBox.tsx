import { ChangeEventHandler } from "react";
import "./searchBox.styles.css";

type SearchBoxProps = {
  className: string;
  searchPlaceholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

export const SearchBox = ({
  className,
  onChangeHandler,
  searchPlaceholder,
}: SearchBoxProps) => (
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
