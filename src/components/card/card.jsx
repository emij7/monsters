import "./card.styles.css";

export const Card = ({ monster: { id, name, email } }) => (
  //Another way of destructuring, maybe better because is easier to read is:
  //const {id,name,email} = monster
  <div className="card-container">
    <img src={`https://robohash.org/${id}?set=set2`} alt={`monster ${name}`} />
    <h2>{name.toUpperCase()}</h2>
    <p className="card-email">{email}</p>
  </div>
);

// export default class Card extends Component {
//   render() {
//     const { name, email, id } = this.props.monster;
//     return (
//       <div className="card-container" id={id}>
//         <img
//           src={`https://robohash.org/${id}?set=set2`}
//           alt={`monster ${name}`}
//         />
//         <h2>{name.toUpperCase()}</h2>
//         <p className="card-email">{email}</p>
//       </div>
//     );
//   }
// }
